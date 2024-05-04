// ある文字列内に特定の文字列が含まれているかどうかを判定する

// incluedes()の使用
// ===============================================================

let str = "Hello World!";
let search = "World";

if (str.includes(search)) {
  console.log("文字列が含まれています");
} else {
  console.log("文字列が含まれていません");
}

// incluedes()の使用
// 大文字、小文字を区別しない場合
// →全て大文字or小文字に変換してから比較をする
// ===============================================================

if (str.toLowerCase().includes(search.toLowerCase())) {
  console.log("文字列が含まれています");
} else {
  console.log("文字列が含まれていません");
}
