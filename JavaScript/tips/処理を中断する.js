// なんらかの処理を中断する方法

// 1. 制御用の変数を使用する方法
// ===============================================================
let continueProcessing = true;

// ５秒後にタイムアウト制御用の変数をfalseに変更する
setTimeout(() => {
  continueProcessing = false;
  console.log("処理がタイム・アウトしました");
}, 5000); // タイムアウトの設定秒数：５秒

// 最低でも10秒以上かかる関数
const process = async () => {
  for (let i = 0; i < 10; i++) {
    if (!continueProcessing) {
      console.log("処理を中断します");
      break;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000)); // １秒待つ
    console.log(`ステップ ${i + 1} 完了`);
  }
};

process();

// 2. AbortControllerを使用したPromiseのキャンセル
// https://developer.mozilla.org/ja/docs/Web/API/AbortController
// ===============================================================
const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => {
  controller.abort();
  console.log("フェッチ処理が中断されました");
}, 5000); // 5秒後に中断

fetch("https://api.example.com/data", { signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => {
    if (err.name === "AbortError") {
      console.log("フェッチ処理がユーザーによって中断されました");
    } else {
      console.log("エラー: ", err);
    }
  });

// 3. ジェネレータを使用する方法
// ===============================================================
function* generatorFunction(params) {
  console.log("スタート");
  yield;
  console.log("再開");
}

const generator = generatorFunction();
generator.next(); // "スタート"を出力
setTimeout(() => {
  generator.next(); // "再開"を出力
}, 5000); // 5秒後に再開

// 4. ワーカースレッドの使用（Node.jsの場合）
// ===============================================================

// 5. ワーカースレッドの使用（ブラウザの場合）
// ===============================================================
