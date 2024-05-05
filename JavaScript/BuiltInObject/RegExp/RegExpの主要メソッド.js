// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp

// exec()
// exec(str)
// ===============================================================

// test()
// regexObj.test(str);
// ===============================================================
const strTest = "table football";
const regex = new RegExp("foo*"); // 'foo'または'foo'から始まる文字列

// regexのオブジェクトである`regex`からメソッドを呼び出す
console.log(regex.test(strTest)); // true

// toString()
// regexObj.toString();
// ===============================================================
