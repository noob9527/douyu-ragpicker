export default class Clock {

  id: number;

  constructor(
    private handler: () => {},
    private interval: number = 1000
  ) {
  }

  start() {
    if (this.id) return;
    this.id = window.setInterval(this.handler, this.interval);
  }

  stop() {
    window.clearInterval(this.id);
    this.id = 0;
  }
}
