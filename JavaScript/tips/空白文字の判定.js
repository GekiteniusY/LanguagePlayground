// ある文字列が空文字または空白スペースのみであることを判定する

// trim()とlengthプロパティの使用
// ===============================================================

function isBlank(str) {
  // trim()メソッドは文字列の両端から空白を削除
  // 文字列の長さが0であれば文字列はブランク
  return str.trim().length === 0;
}

console.log("isBlank ", isBlank("")); // true
console.log("isBlank ", isBlank("   ")); // true
console.log("isBlank ", isBlank("text")); // false

// 正規表現の使用
function isBlank2(str) {
  // `\S`は非空白文字にマッチする
  // test()メソッドは正規表現を使用して指定された文字列に対してパターンマッチングを行うメソッドで、真偽値を返す
  return !/\S/.test(str);
}

console.log("isBlank2 ", isBlank2("")); // true
console.log("isBlank2 ", isBlank2("   ")); // true
console.log("isBlank2 ", isBlank2("text")); // false
