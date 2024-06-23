// Array.prototypeの主要メソッド

// at()
// 指定されたインデックスにある要素を返すメソッド
// 配列のインデックスとなる整数値を引数に受け取る
// 負の整数値を設定した場合、配列の最後の項目から前へ数える
// at(index)
// ===============================================================
const arrayAt = [5, 12, 8, 130, 44];
let index = 2;
console.log(arrayAt.at(index)); // インデックス2である'8'が表示される
index = -2;
console.log(arrayAt.at(index)); // 後ろから2番目である'130'が表示される

// concat()
// concatenate:結合、のこと
// 2つ以上の配列を結合するメソッド
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)
// ===============================================================
const arrayConcat1 = ["a", "b", "c"];
const arrayConcat2 = ["d", "e", "f"];
const arrayConcat3 = arrayConcat1.concat(arrayConcat2); // 1に2を結合する
// ["a", "b", "c", "d", "e", "f"]
console.log(arrayConcat3);

// copyWithin()
// copyWithin(target, start)
// copyWithin(target, start, end)
// ===============================================================
// TODO:

// entries()
// その配列内の各要素に対するキー/値のペアを含む新しいイテレーターオブジェクトを返す
// ===============================================================
const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();
console.log(iterator1.next().value); // Array [0, "a"]
console.log(iterator1.next().value); // Array [1, "b"]
console.log(iterator1.next()); // Object { value: Array [2, "c"], done: false }
console.log(iterator1.next().value); // undefined

// every()
// テスト用として利用できるメソッド
// 関数を引数に取り、配列の各要素を順番に関数にかけてその関数で実装されたテストに
// 合格するかどうかの判定を行う
// every(callbackFn)
// every(callbackFn, thisArg)
// ===============================================================
const isBelowThreshold = (currentValue) => currentValue < 40;
const arrayEvery = [1, 30, 39, 29, 10, 13];
// 配列.every(関数)
console.log(arrayEvery.every(isBelowThreshold));

// fill()
// 引数で受けた値で、引数で受けた範囲の要素を上書きした配列を返す
// fill(value)
// fill(value, start)
// fill(value, start, end)
// ===============================================================
const arrayFill = [1, 2, 3, 4];
console.log(arrayFill.fill(0, 2, 4)); // 0で、インデックス2〜4を上書きする
console.log(arrayFill.fill(5, 1)); // 5で、インデックス1〜を上書きする
console.log(arrayFill.fill(6)); // 6で、全てのインデックスを上書きする

// filter()
// 要素をフィルタリングできるメソッド
// 引数に関数を受け、その関数の評価でテストに合格した要素だけを抽出したシャローコピーを作成する
// filter(callbackFn)
// filter(callbackFn, thisArg)
// ===============================================================
const arrayFilter = ["spray", "elite", "exuberant", "destruction", "present"];
const filterResult = arrayFilter.filter((word) => word.length > 6); // 6文字以上を基準にフィルタリング
console.log(filterResult); // Array ["exuberant", "destruction", "present"]

// find()
// 関数の評価でテストに合格した”最初の”要素を返す、テスト関数を満たさなかった場合はundefinedを返す
// find(callbackFn)
// find(callbackFn, thisArg)
// ===============================================================
const arrayFind = [5, 12, 8, 130, 44];
const foundFind = arrayFind.find((element) => element > 10); // 10より大きい"最初の"数値を探す
console.log(foundFind);

// findIndex()
// 関数の評価でテストに合格した”最初の”要素のインデックス（正数値）を返す、テスト関数を満たさなかった場合は-1を返す
// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)
// ===============================================================
const arrayFindIndex = [5, 12, 8, 130, 44];
const isLargerNumberFindIndex = (element) => element > 13;
console.log(arrayFindIndex.findIndex(isLargerNumberFindIndex)); // 130のインデックス番号である３が返ってくる

// findLast()
// find()関数の逆
// findLast(callbackFn)
// findLast(callbackFn, thisArg)
// ===============================================================
const arrayFindLast = [5, 12, 50, 130, 44];
const foundFindLast = arrayFindLast.findLast((element) => element > 45);
console.log(foundFindLast);

// findLastIndex()
// findIndex()の逆
// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)
// ===============================================================
const arrayFindIndexLast = [5, 12, 50, 130, 44];
const isLargerNumberFindIndexLast = (element) => element > 45;
console.log(isLargerNumberFindIndexLast);

// flat()
// 多次元配列内のサブ配列を、引数に指定した深さで結合する
// flat()
// flat(depth)
// ===============================================================
const ArrayFlat1 = [0, 1, 2, [3, 4]];
console.log(ArrayFlat1.flat()); // ネスト１つ分だけ結合 Array [0, 1, 2, 3, 4]
const ArrayFlat2 = [0, 1, [2, [3, [4, 5]]]];
console.log(ArrayFlat2.flat()); // ネスト１つ分だけ結合 Array [0, 1, 2, Array [3, Array [4, 5]]]
console.log(ArrayFlat2.flat(2)); // ネスト２つ分だけ結合 Array [0, 1, 2, 3, Array [4, 5]]
console.log(ArrayFlat2.flat(Infinity)); // 全てのネストを結合 Array [0, 1, 2, 3, 4, 5]

// flatMap()
// map() の後に深さ 1 の flat() を行うのと同じ
// (arr.map(...args).flat())、これら 2 つのメソッドを別々に呼び出すよりもわずかに効率的
// flatMap(callbackFn)
// flatMap(callbackFn, thisArg)
// ===============================================================
const ArrayFlatMap = [1, 2, 1];
// mapで全てのelementに対して処理、インデックス１の2が[2,2]の配列に変換されるが、
// flatがかけられるので、最終的には１次元配列になる
const resultFlatMap = ArrayFlatMap.flatMap((num) => (num === 2 ? [2, 2] : 1)); // Array [1, 2, 2, 1]

// forEach()
// 各要素に対して１度ずつ引数の関数を実行する
// forEach(callbackFn)
// forEach(callbackFn, thisArg)
// ===============================================================
const arrayForEach = ["a", "b", "c"];
arrayForEach.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// inclueds()
// 特定の要素が配列に含まれているかどうかを真偽値で返す
// プリミティブ値の判定で使用されることが多いが、オブジェクトや関数などのリファレンス型のデータでも使用可能
// リファレンス型のデータの場合には、同一参照であるかどうかを判定する
// includes(searchElement)
// includes(searchElement, fromIndex)
// ===============================================================
const arrayIncludes = [1, 2, 3];
console.log(arrayIncludes.includes(2)); // true
const ptestIncludes = ["cat", "dog", "bat"];
console.log(ptestIncludes.includes("cat")); // true
console.log(ptestIncludes.includes("at")); // false

// オブジェクトの構造を加味して判定する場合はsome()メソッドと、カスタムの比較関数を作成して行う
const funcIncludes = () => {
  console.log("Hello");
};
const objIncludes = { name: "Tom" };
const arrayIncludes1 = [funcIncludes, objIncludes]; // 関数、オブジェクトを含む配列
console.log(arrayIncludes1.includes(funcIncludes)); // true　同じ参照のオブジェクトの確認のため
console.log(arrayIncludes.includes(arrayIncludes1)); // true　同じ参照のオブジェクトの確認のため

// indexOf()
// 引数に与えられた値と同じ値を持つ”最初の”要素のインデックスを返す、存在しない場合は-1を返す
// 第二引数を指定した場合、その数のインデックスより後ろから評価を開始する
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
// ===============================================================
const arrayIndexOf = ["ant", "bison", "camel", "duck", "bison"];
console.log(arrayIndexOf.indexOf("bison")); // 1
console.log(arrayIndexOf.indexOf("bison", 2)); // 4
console.log(arrayIndexOf.indexOf("giraffe")); // -1

// join()
// 列の全要素を順に連結した新しい文字列を返す
// 引数に何も指定がない場合はコンマで連結される
// join()
// join(separator)
// ===============================================================
const arrayJoin = ["Fire", "Air", "Water"];
console.log(arrayJoin.join()); // "Fire,Air,Water"
console.log(arrayJoin.join("")); // "FireAirWater"
console.log(arrayJoin.join("-")); // "Fire-Air-Water"

// keys()
// 配列内の各インデックスのキーで構成される、新しい配列のイテレータオブジェクトを返す
// オブジェクトの場合はキーの配列を返す
// keys()
// ===============================================================
const arrayKeys = ["a", "b", "c"];
const iteratorKeys = arrayKeys.keys();
for (const key of iteratorKeys) {
  console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2

// lastIndexOf()
// indexOf()の逆で、条件に合致する"最後の"要素のインデックスを返す
// 逆から要素数を数えるわけではない点に注意
// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)
// ===============================================================
const arrayLastIndexOf = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(arrayLastIndexOf.lastIndexOf("Dodo")); // 3
console.log(arrayLastIndexOf.lastIndexOf("Tiger")); // 1

// map()
// 引数に与えられた関数を全ての要素に対して呼び出す
// 結果から新しい配列を生成して返す
// map(callbackFn)
// map(callbackFn, thisArg)
// ===============================================================
const arrayMap = [1, 4, 9, 16];
const map1 = arrayMap.map((x) => {
  x * 2;
});
console.log(map1); // Array [2, 8, 18, 32]

// pop()
// 呼び出し元の配列から最後の要素を取り除き、その要素を返す
// ※呼び出し元の配列の長さを変化させる
// pop()
// ===============================================================
const arrayPlants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(arrayPlants.pop()); // 'tomato'
console.log(arrayPlants); // Array ["broccoli", "cauliflower", "cabbage", "kale"]
arrayPlants.pop();
console.log(arrayPlants); // Array ["broccoli", "cauliflower", "cabbage"]

// push()
// 呼び出し元の配列に、引数に指定した値を追加する
// 返り値としては、追加した後の配列の要素数を返す
// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)
// ===============================================================
const arrayPush = ["pigs", "goats", "sheep"];
const count = arrayPush.push("cows");
console.log(count); // 4
console.log(arrayPush); // Array ["pigs", "goats", "sheep", "cows"]
arrayPush.push("chickens", "cats", "dogs");
console.log(arrayPush); // Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// reduce()
// 配列の各要素にアクセスし、処理を行う
// 処理を行う際、要素の０番目から始めるのではなく、第二引数に指定する初期値から開始する
// reduce(callbackFn)
// reduce(callbackFn, initialValue)
// ===============================================================
// 保守性の観点から実用的でない、forなど他のメソッドを使うことを検討すること


// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => {
	  console.log('=======')
    console.log('accumulator: ', accumulator)
    console.log('currentValue: ', currentValue)
    console.log('=======\n')
    return accumulator + currentValue;
  },
  initialValue,
);

const sumWithInitial2 = array1.reduce(
  (accumulator, currentValue, i, k, j) => {
    console.log('index is : ', i) // index
    console.log('Array is : ', k) // array1
    // console.log(j) // undefined
    return accumulator + currentValue;
  },
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


// > "======="
// > "accumulator: " 0
// > "currentValue: " 1
// > "=======
// "
// > "======="
// > "accumulator: " 1
// > "currentValue: " 2
// > "=======
// "
// > "======="
// > "accumulator: " 3
// > "currentValue: " 3
// > "=======
// "
// > "======="
// > "accumulator: " 6
// > "currentValue: " 4
// > "=======
// "
// > 10

const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

const pipeCustom = 
  // 複数の関数を引数に取る
  (...functions) => {
	console.log('functions.length is ', functions.length)
    
    // 更に初期値を引数に取る
    return (initialValue) => {
		console.log('initialValue: ', initialValue)
      
      // reduce()の初期値としてinitialValueを利用
      // reduce()を利用して、...functionsで受け取った関数の配列に逐次的にアクセス
    	return functions.reduce((acc, fn) => {
    				console.log('acc: ', acc);
    				return fn(acc);
      			}, initialValue);
    };
  };


// Building blocks to use for composition
const double = (x) => {
  console.log('double() called')
  return 2 * x;
};
const triple = (x) => {
  console.log('triple() called')
  return 3 * x;
};
const quadruple = (x) => {
  console.log('quadruple() called')
  return 4 * x;
};


// console.log(multiply24(10))
console.log(pipeCustom(double, triple, quadruple)(10))



// reduceRight()
// reduce()の逆
// ===============================================================
// 保守性の観点から実用的でないため割愛



// reverse()
// ===============================================================

// shift()
// ===============================================================

// slice()
// ===============================================================

// some()
// ===============================================================
function isEquivalent(a, b) {
  // プロパティの名前の配列を取得
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  // プロパティの数が異なる場合は等価ではない
  if (aProps.length != bProps.length) {
    return false;
  }

  // 各プロパティについて値を比較
  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];
    // 要素の値を比較
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
}

const arraySome1 = { name: "Tom", age: 25 };
const arraySome = [{ name: "Tom", age: 25 }];
console.log(arraySome.some((item) => isEquivalent(item, arraySome1)));

// sort()
// ===============================================================

// splice()
// ===============================================================

// toLocaleString()
// ===============================================================

// toReversed()
// ===============================================================

// toSorted()
// ===============================================================

// toSpliced()
// ===============================================================

// toString()
// ===============================================================

// unshift()
// ===============================================================

// values()
// ===============================================================

// with()
// ===============================================================
