import { ElevatorScheduler } from '../services/elevator-scheduler';
import { ElevatorTimer } from '../services/elevator-timer';
import { ElevatorStatus, KakaoElevatorService } from '../services/kakao-elevator';
import { ElevatorButtonPressData } from './kakao-elevator-buttons';
import htmlContent from './kakao-elevator-cells.html';

const templateElement = document.createElement('template');
templateElement.innerHTML = htmlContent;

export const ELEVATOR_ARRIVAL = 'elevator-arrival';
export interface ElevatorArrivalData {
    floor: number;
}

/**
 * @description KakaoElevator is an extended HTMLElement holding an elevator info
 */
export interface KakaoElevator {
    element: HTMLElement;
    curFloor: number;
    destFloor: number;
    index: number;
}

/**
 * @description KakaoElevatorCell is an extended HTMLElement holding an cell info
 */
export interface KakaoElevatorCell {
    element: HTMLElement;
    elevator: KakaoElevator;
}

export const enum KakaoElevatorCellsAttr {
    Elevators = 'elevators',
    ButtonPressed = 'button-pressed',
}
export class KakaoElevatorCells extends HTMLElement {
    static get observedAttributes(): KakaoElevatorCellsAttr[] {
        return [KakaoElevatorCellsAttr.Elevators, KakaoElevatorCellsAttr.ButtonPressed];
    }
    static readonly MIN_ELEVATORS = 2;
    static readonly MAX_ELEVATORS = 4;
    static readonly TICK_TOCK_RATE = 1000;
    static readonly ELEVATOR_STANDBY_TIME = 3000;

    private _cellContainer: HTMLElement;
    private _cells: KakaoElevatorCell[] = [...Array(KakaoElevatorCells.MAX_ELEVATORS)].map((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        const elevator = document.createElement('div');
        elevator.classList.add('elevator');
        elevator.setAttribute('status', ElevatorStatus.available);
        cell.appendChild(elevator);

        return {
            element: cell,
            elevator: {
                index,
                element: elevator,
                curFloor: 1,
                destFloor: 1,
            },
        };
    });
    private elevatorService: KakaoElevatorService;
    private elevatorScheduler: ElevatorScheduler;
    private elevatorTimer: ElevatorTimer;

    private _validateElevator(elevators: number) {
        return KakaoElevatorCells.MIN_ELEVATORS <= elevators && elevators <= KakaoElevatorCells.MAX_ELEVATORS;
    }

    private _updateCells(oldElevators: number, newElevators: number) {
        // Remove cells from DOM
        this._cells.filter((_, index) => index < oldElevators).forEach((cell) => this._cellContainer.removeChild(cell.element));

        // Add cells to DOM
        this._cells.filter((_, index) => index < newElevators).forEach((cell) => this._cellContainer.appendChild(cell.element));
    }

    private async _callElevator(floor: number) {
        const elevator = (await this.elevatorScheduler.getNearestElevator(floor)) as KakaoElevator;
        // Elevator already arrived
        if (floor === elevator.curFloor) {
            this.elevatorService
                .elevatorArrived(elevator)
                .then((elevator) => this._onElevatorArrival(elevator))
                .then((elevator) => this.elevatorScheduler.nextElevatorCall(elevator));
            return;
        }
        elevator.destFloor = floor;
        this.elevatorService.moveElevator(elevator);
    }

    private _onElevatorArrival(elevator: KakaoElevator) {
        this.dispatchEvent(
            new CustomEvent<ElevatorButtonPressData>(ELEVATOR_ARRIVAL, {
                bubbles: true,
                composed: true,
                detail: {
                    floor: elevator.curFloor,
                },
            }),
        );
        return elevator;
    }

    // Called every 1 second interval
    private _tick = () => {
        this._cells
            .filter((cell) => this.elevatorService.isElevatorMoving(cell.elevator))
            .forEach((cell) => {
                if (this.elevatorService.hasElevatorArrived(cell.elevator)) {
                    // Arrive at the destination floor
                    this.elevatorService
                        .elevatorArrived(cell.elevator)
                        .then((elevator) => this._onElevatorArrival(elevator))
                        .then((elevator) => this.elevatorScheduler.nextElevatorCall(elevator));
                } else {
                    // Moving
                    this.elevatorService.moveElevator(cell.elevator);
                }
            });
    };

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateElement.content.cloneNode(true));

        this._cellContainer = shadowRoot.querySelector('.cell-container') as HTMLElement;

        this.elevatorService = new KakaoElevatorService(this._cells);
        this.elevatorScheduler = new ElevatorScheduler(this._cellContainer, this._cells, this.elevatorService);
        this.elevatorTimer = new ElevatorTimer(KakaoElevatorCells.TICK_TOCK_RATE);
    }
    // TODO: properties / attributes should support all primitive types
    get elevators(): number | null {
        const attr = this.getAttribute(KakaoElevatorCellsAttr.Elevators);
        return attr ? parseInt(attr) : null;
    }

    set elevators(elevators: number | null) {
        if (elevators) {
            if (this._validateElevator(elevators)) {
                this.setAttribute(KakaoElevatorCellsAttr.Elevators, `${elevators}`);
            }
        } else {
            this.removeAttribute(KakaoElevatorCellsAttr.Elevators);
        }
    }

    get buttonPressed(): number | null {
        const attr = this.getAttribute(KakaoElevatorCellsAttr.ButtonPressed);
        return attr ? parseInt(attr) : null;
    }

    set buttonPressed(floor: number | null) {
        if (floor) {
            this.setAttribute(KakaoElevatorCellsAttr.ButtonPressed, `${floor}`);
        } else {
            this.removeAttribute(KakaoElevatorCellsAttr.ButtonPressed);
        }
    }

    connectedCallback(): void {
        this.elevatorTimer.registerHandler(this._tick);
    }

    disconnectedCallback(): void {
        this.elevatorTimer.unregisterHandler();
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        const intOldValue = parseInt(oldValue) || 0;
        const intNewValue = parseInt(newValue);
        switch (name) {
            case KakaoElevatorCellsAttr.Elevators:
                if (this._validateElevator(intNewValue)) {
                    this._updateCells(intOldValue, intNewValue);
                } else {
                    console.error(`올바른 갯수를 입력해주세요 (${KakaoElevatorCells.MIN_ELEVATORS}개 - ${KakaoElevatorCells.MAX_ELEVATORS}개) `);
                }
                break;
            case KakaoElevatorCellsAttr.ButtonPressed:
                if (this.buttonPressed) {
                    this._callElevator(this.buttonPressed);
                    this.buttonPressed = null;
                }
        }
    }
}
