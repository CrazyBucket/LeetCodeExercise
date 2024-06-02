class PubSub {
  constructor() {
    this.subscribers = {};
  }
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }
  unSubscribe(event, callback) {
    if (this.subscribers[event]) {
      const index = this.subscribers[event].indexOf(callback);
      if (index > -1) {
        this.subscribers[event].splice(index, 1);
      }
    }
  }
  publish(event, data) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach(subscribeCallback => {
        subscribeCallback(data);
      });
    }
  }
}
