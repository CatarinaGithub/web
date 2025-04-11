type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  // use always error funtions
  // https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15066994#overview
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
