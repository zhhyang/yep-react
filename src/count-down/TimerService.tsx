const TimerService = {
  queue: [],
  register(fn:any) {
    this.queue.push(fn);
    if (!this.timer) {
      this.startTimer();
    }
  },
  unregister(fn:any) {
    this.queue = this.queue.filter((f:any) => f !== fn);
    if (!this.queue.length) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  startTimer() {
    this.timer = setInterval(() => {
      this.queue.forEach((cb:any) => cb());
    }, 1000);
  },
};

export default TimerService;
