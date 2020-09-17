import htmlContent from './kakao-app-elevator.html';
import { ElevatorButtonPressData, ELEVATOR_BUTTON_PRESS, KakaoElevatorButtons } from './kakao-elevator-buttons';
import { ElevatorArrivalData, ELEVATOR_ARRIVAL, KakaoElevatorCells } from './kakao-elevator-cells';

const templateElement = document.createElement('template');
templateElement.innerHTML = htmlContent;

export const enum KakaoAppElevatorAttr {}

export class KakaoAppElevator extends HTMLElement {
    static get observedAttributes(): KakaoAppElevatorAttr[] {
        return [];
    }

    private _elevatorButtonsElement: KakaoElevatorButtons;
    private _elevatorCellsElement: KakaoElevatorCells;
    private _themeSwitchElement: HTMLInputElement;

    private _onElevatorButtonPress = (event: Event) => {
        this._elevatorCellsElement.buttonPressed = (event as CustomEvent<ElevatorButtonPressData>).detail.floor;
    };

    private _onElevatorArrival = (event: Event) => {
        const floor = (event as CustomEvent<ElevatorArrivalData>).detail.floor;
        this._elevatorButtonsElement.arrived = floor;
    };

    private _onThemeSwitch = () => {
        const switchOn = this._themeSwitchElement.checked;

        if (switchOn) {
            document.body.classList.replace('light', 'dark');
        } else {
            document.body.classList.replace('dark', 'light');
        }
    };

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateElement.content.cloneNode(true));

        this._elevatorButtonsElement = shadowRoot.querySelector<KakaoElevatorButtons>('kakao-elevator-buttons') as KakaoElevatorButtons;
        this._elevatorCellsElement = shadowRoot.querySelector<KakaoElevatorCells>('kakao-elevator-cells') as KakaoElevatorCells;
        this._themeSwitchElement = shadowRoot.querySelector<HTMLInputElement>('input[name=theme-switch]') as HTMLInputElement;
    }

    connectedCallback(): void {
        this.addEventListener(ELEVATOR_BUTTON_PRESS, this._onElevatorButtonPress);
        this.addEventListener(ELEVATOR_ARRIVAL, this._onElevatorArrival);
        this._themeSwitchElement.onchange = this._onThemeSwitch;
    }

    disconnectedCallback(): void {
        this.removeEventListener(ELEVATOR_BUTTON_PRESS, this._onElevatorButtonPress);
        this.removeEventListener(ELEVATOR_ARRIVAL, this._onElevatorArrival);
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        // switch (name) {
        //     case:
        // }
    }
}
