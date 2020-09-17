import { KakaoElevator, KakaoElevatorCell } from '../components/kakao-elevator-cells';

export const enum ElevatorStatus {
    available = 'available',
    moving = 'moving',
    loading = 'standby',
}

export class KakaoElevatorService {
    static readonly ELEVATOR_STANDBY_TIME = 3000;

    constructor(private cells: KakaoElevatorCell[]) {}

    public standbyElevator(elevator: KakaoElevator): Promise<number> {
        elevator.element.setAttribute('status', ElevatorStatus.loading);
        return new Promise((resolve) => setTimeout(resolve, KakaoElevatorService.ELEVATOR_STANDBY_TIME));
    }

    public moveElevator(elevator: KakaoElevator): void {
        if (!this.isElevatorMoving(elevator)) {
            elevator.element.setAttribute('status', ElevatorStatus.moving);
        }
        elevator.curFloor += (elevator.destFloor - elevator.curFloor) / Math.abs(elevator.destFloor - elevator.curFloor);

        const elevatorSize = getComputedStyle(document.documentElement).getPropertyValue('--kakao-elevator-size');
        elevator.element.style.bottom = `calc(${elevatorSize} * ${elevator.curFloor - 1})`;
    }

    public isElevatorMoving(elevator: KakaoElevator): boolean {
        return elevator.element.getAttribute('status') === ElevatorStatus.moving;
    }

    public isElevatorAvailable(elevator: KakaoElevator): boolean {
        return elevator.element.getAttribute('status') === ElevatorStatus.available;
    }

    public hasElevatorArrived(elevator: KakaoElevator): boolean {
        return this.isElevatorMoving(elevator) && elevator.curFloor === elevator.destFloor;
    }

    public async elevatorArrived(elevator: KakaoElevator): Promise<KakaoElevator> {
        if (!this.isElevatorAvailable(elevator)) {
            await this.standbyElevator(elevator);
            elevator.element.setAttribute('status', ElevatorStatus.available);
        }
        return elevator;
    }
}
