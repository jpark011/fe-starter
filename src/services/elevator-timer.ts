export class ElevatorTimer {
    private _timer: number | undefined;

    constructor(private interval: number = 1000) {}

    public registerHandler(handler: TimerHandler) {
        this._timer = setInterval(handler, this.interval);
    }

    public unregisterHandler() {
        this._timer ?? clearInterval(this._timer);
    }
}
