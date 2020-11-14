export class SampleService {
    private static _instance: SampleService;

    public static getInstance(): SampleService {
        if (!this._instance) {
            this._instance = new SampleService();
        }
        return this._instance;
    }
}
