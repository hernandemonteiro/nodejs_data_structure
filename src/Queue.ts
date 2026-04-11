export default class Queue {
  private items: any[] = [];

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  enqueue(item: any) {
    this.items.push(item);
  }

  dequeue(): any {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }

  peek(): any {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }

  size(): number {
    return this.items.length;
  }

  show(): any[] {
    return this.items;
  }
}
