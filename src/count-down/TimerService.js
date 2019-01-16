const TimerService = {
  queue: [],
  register(fn) {
    this.queue.push(fn);
    if (!this.timer) {
      this.startTimer();
    }
  },
  unregister(fn) {
    this.queue = this.queue.filter(f => f !== fn);
    if (!this.queue.length) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  startTimer() {
    this.timer = setInterval(() => {
      this.queue.forEach(cb => cb());
    }, 1000);
  },
};

export default TimerService;
