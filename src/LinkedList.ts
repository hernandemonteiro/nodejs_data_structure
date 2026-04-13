export default class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  append(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insertAt(index: number, value: T): void {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let current: Node<T> | null = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    newNode.next = current!.next;
    current!.next = newNode;
    this.length++;
  }

  removeAt(index: number): void {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.head = this.head!.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    current!.next = current!.next!.next;
    if (index === this.length - 1) {
      this.tail = current;
    }
    this.length--;
  }

  getAt(index: number): T {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.value;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  show(): T[] {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  showVisual(): string {
    if (!this.head) return "empty";
    const parts: string[] = [];
    let current: Node<T> | null = this.head;
    while (current) {
      parts.push(String(current.value));
      current = current.next;
    }
    parts.push("null");
    return parts.join(" -> ");
  }
}

class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
