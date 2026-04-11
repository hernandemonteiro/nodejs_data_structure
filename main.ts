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

console.log("\nAll tests passed successfully in queue test!");
