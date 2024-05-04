// 正規表現を利用して、あるパターンにマッチするかどうかを判定する

// test()メソッド
// ===============================================================

// test()メソッドは正規表現オブジェクトに属している
const regex = /pattern/; // パターンの指定
const result = regex.test("string to test"); // テストする文字列を引数に指定

// Ex,
const regex2 = /\d+/;
console.log(regex2.test("1234")); // true
console.log(regex2.test("abcd")); // false

// \dは半角数字
// +は直前のパターンを1回以上繰り返し、最長一致なので、できるだけ長い文字列にヒットします。
// https://www.megasoft.co.jp/mifes/seiki/s006.html
