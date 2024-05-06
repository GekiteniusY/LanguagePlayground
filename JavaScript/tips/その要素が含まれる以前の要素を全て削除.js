const array = [
  "dog",
  "dog",
  "TARGET",
  "cat",
  "dog",
  "次のTARGETを含めてここまで消す",
  "TARGET",
  "ここを残す",
  "これも残す",
];

const deleteTarget = "TARGET";

// 方法１：１度のアクセスで完了するので効率的　O(n)
let result = [];
let arrayMethod1 = array;
arrayMethod1.forEach((element) => {
  // if (element === deleteTarget) {
  //   result = [];
  // } else {
  //   result.push(element);
  // }

  element === deleteTarget ? (result = []) : result.push(element);
});
console.log("result: ", result);

// 方法２：whileループの都度includes()とfindIndex()を呼び出してしまい効率が悪い　O(n^2)
let arrayMethod2 = array;
while (arrayMethod2.includes(deleteTarget)) {
  const targetIndex = arrayMethod2.findIndex((element) => {
    return element === deleteTarget;
  });
  arrayMethod2.splice(0, targetIndex + 1);
}

console.log("arrayMethod2: ", arrayMethod2);
