export default class Stack {
  private items: any[] = [];

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  push(item: any) {
    this.items.push(item);
  }

  pop(): any {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  peek(): any {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

  show(): any[] {
    return this.items;
  }
}
