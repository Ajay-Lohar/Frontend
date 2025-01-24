export function checkPrime(num) {
  // logic
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

// const arr = [1, 2, -3, -6, -10 , 7,8,9] --> [1,2,7,8,9]

export function getPositiveArray(arr) {
  const newArray = arr.filter((num) => {
    return num >= 0;
  });
  return newArray;
}

// const arr = [1, 2, 3, 6, 10, 7 , 8, 9] --> [2, 6, 10, 8]
// = [{}, {}, {}, {}]

export function getEvenArray(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// const names = ["salman", "kunal", "rahul", "ashish", "abcd"] -->
// ["SALMAN", "KUNAL", "RAHUL", "ASHISH", "ABCD"]

// const names = ["salman", "kunal", "rahul", "ashish", "abcd"] -->
// ["*salman*", "*kunal*", "*rahul*", "*ashish*", "*abcd*"]

export async function fetchTodos() {
  const res = await fetch("https://dummyjson.com/todos");
  const data = await res.json();

  const todos = data.todos;

  return todos.filter((todo) => todo.completed);
}
