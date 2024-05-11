// なんらかの処理を中断する方法

// 1. 制御用の変数を使用する方法
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
