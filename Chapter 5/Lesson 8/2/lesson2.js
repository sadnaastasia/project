let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessagesDate = new WeakMap();

readMessagesDate.set(messages[0], new Date());
readMessagesDate.set(messages[1], new Date());
readMessagesDate.set(messages[2], new Date());