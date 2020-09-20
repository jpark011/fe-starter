import { KakaoElevatorCell, KakaoElevator } from '../components/kakao-elevator-cells';
import { KakaoElevatorService } from './kakao-elevator';

type ElevatorCall = (elevator: KakaoElevator) => void;

export class ElevatorScheduler {
    private _waitList: ElevatorCall[] = [];

    constructor(
        private cellContainer: HTMLElement,
        private cells: KakaoElevatorCell[],
        private elevatorService: KakaoElevatorService = new KakaoElevatorService(cells),
    ) {}

    public getAvailableCells(): KakaoElevatorCell[] {
        return this.cells
            .filter((cell) => this.cellContainer.contains(cell.element))
            .filter((cell) => this.elevatorService.isElevatorAvailable(cell.elevator));
    }

    public getNearestElevator(floor: number): Promise<KakaoElevator> {
        return new Promise((resolve) => {
            const cells = this.getAvailableCells();
            if (0 < cells.length) {
                const cell = cells.reduce((prevCell, curCell) => {
                    const prevDiff = Math.abs(floor - prevCell.elevator.curFloor);
                    const curDiff = Math.abs(floor - curCell.elevator.curFloor);

                    return prevDiff < curDiff ? prevCell : curCell;
                });
                resolve(cell.elevator);
            } else {
                this._waitList.push(resolve);
            }
        });
    }

    public nextElevatorCall(elevator: KakaoElevator): KakaoElevator {
        if (0 < this._waitList.length) {
            const next = this._waitList.shift() as ElevatorCall;
            next(elevator);
        }
        return elevator;
    }
}
