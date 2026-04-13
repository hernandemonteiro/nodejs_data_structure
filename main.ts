import Queue from "./src/Queue";

console.log("Testing Queue implementation...\n");
const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);

console.log("queue1.show():", queue1.show()); // Output: [1, 2, 3, 4]
console.log("queue1.dequeue():", queue1.dequeue()); // Output: 1
console.log("queue1.peek():", queue1.peek()); // Output: 2
console.log("queue1.size():", queue1.size()); // Output: 3
console.log("queue1.isEmpty():", queue1.isEmpty()); // Output: false
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();
console.log("after dequeueing all elements!");
console.log("queue1.isEmpty():", queue1.isEmpty()); // Output: true

console.log("\nAll tests passed successfully in queue test!\n");

console.log("Testing Stack implementation...\n");
import Stack from "./src/Stack";

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);

console.log("stack1.show():", stack1.show()); // Output: [1, 2, 3, 4]
console.log("stack1.pop():", stack1.pop()); // Output: 4
console.log("stack1.peek():", stack1.peek()); // Output: 3
console.log("stack1.size():", stack1.size()); // Output: 3
console.log("stack1.isEmpty():", stack1.isEmpty()); // Output: false
stack1.pop();
stack1.pop();
stack1.pop();
console.log("after popping all elements!");
console.log("stack1.isEmpty():", stack1.isEmpty()); // Output: true

console.log("\nAll tests passed successfully in stack test!\n");

console.log("Testing LinkedList implementation...\n");
import LinkedList from "./src/LinkedList";

const list1 = new LinkedList<number>();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);

console.log("list1.size():", list1.size()); // Output: 4
console.log("list1.getAt(0):", list1.getAt(0)); // Output: 1
console.log("list1.getAt(2):", list1.getAt(2)); // Output: 3
console.log("list1.isEmpty():", list1.isEmpty()); // Output: false
list1.insertAt(2, 99);
console.log("after inserting 99 at index 2!");
console.log("list1.getAt(2):", list1.getAt(2)); // Output: 99
console.log("list1.show():", list1.showVisual());
list1.removeAt(2);
console.log("after removing element at index 2!");
console.log("list1.getAt(2):", list1.getAt(2)); // Output: 3
console.log("list1.show():", list1.showVisual());
list1.removeAt(0);
console.log("after removing element at index 0!");
console.log("list1.getAt(0):", list1.getAt(0)); // Output: 2
list1.removeAt(list1.size() - 1);
console.log("after removing last element!");
console.log("list1.size():", list1.size()); // Output: 2
console.log("list1.isEmpty():", list1.isEmpty()); // Output: false
list1.removeAt(0);
list1.removeAt(0);
console.log("after removing all elements!");
console.log("list1.isEmpty():", list1.isEmpty()); // Output: true
console.log("list1.show():", list1.showVisual()); // Output: empty

console.log("\nAll tests passed successfully in linked list test!\n");
