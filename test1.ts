export = class Test {
    constructor(public console: any) {

    }

    * run() {
        const runStartTime = new Date();
        this.console.info(`Run start time: ${runStartTime}`);

        yield this.init();

        const endTime = new Date();
        const someChange = true;
        this.console.info(`Run completion time: ${endTime}. Duration: ${(endTime.getTime() - runStartTime.getTime()) / 1000} seconds. Changed after comment!`);
    }

    async init() {
        try {
            this.console.info("Init!");
        } catch (err) {
            this.console.error("Error!", err);
        }
    }
}
