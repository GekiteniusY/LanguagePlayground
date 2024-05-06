// Promise.raceを使うことでタイムアウト処理を実装することができる

// Promise.raceの基本動作
// ===============================================================
const racePromise = Promise.race([
  // Prettier 改行対策
  delay(1),
  delay(32),
  delay(64),
  delay(128),
]);

// delay(1)が最初に完了するため、その結果が返る
// その他のPromiseは無視される
racePromise.then((value) => {
  console.log(value);
});

// タイムアウト処理への応用
// ===============================================================
// Promise.race()に「目的の非同期処理」「タイムアウト制御用の処理」
// の２つを入れることで、目的の非同期処理の強制終了ロジックを実現できる
// なお、Promise.race()自身は、引数に受けたそれぞれの処理を終了させることはないため
// 引数の処理のそれぞれで、無限ループにならないか等の責務を担う必要がある
Promise.race([
  // Prettier改行対策
  dummyFetch("/resource/data"),
  timeout(500),
])
  .then((response) => {
    console.log(response.body);
  })
  .catch((error) => {
    console.log(error.message);
  });

// タイムアウト処理の検証
// タイムアウトした後も無限ループする処理が残るかどうかの検証
// →無限ループをの処理は残ってしまう
// ===============================================================
Promise.race(
  // Prettierの改行対策
  [
    // Prettierの改行対策
    inifinitLoop(),
    timeout(500),
  ]
    .then((response) => {
      console.log(response.body);
    })
    .catch((error) => {
      console.log(error.message);
    })
);

// 実装サンプル
// ===============================================================
const controller = new AbortController();
const signal = controller.signal;

// タイムアウトのタイミングを具体的な数値ではなく、なんからのフラグとして柔軟に設定できる
const timeoutPromise = new Promise((resolve, reject) => {
  if (controller.abort()) {
    reject(new Error("Timeout"));
  }
});

// 何らかの非同期処理
const asyncOperation = new Promise((resolve, reject) => {
  // ここに非同期処理を記述
});

// Promise.race() でタイムアウト処理を実現
Promise.race([asyncOperation, timeoutPromise])
  .then((result) => {
    // asyncOperation の解決
    console.log(result);
  })
  .catch((error) => {
    // タイムアウトまたは asyncOperation の中止
    console.error(error);
  });

// 共通
// ===============================================================
// 設定した時間だけ待機し、Resolveする関数
function delay(timeoutMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeoutMs);
    }, timeoutMs);
  });
}

function dummyFetch(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith("/resource")) {
        resolve({ body: `Response body of ${path}` });
      } else {
        reject(new Error("NOT FOUND"));
      }
    }, 1000 * Math.random);
  });
}

function timeout(timeoutMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        new Error(`Timeout: ${timeoutMs}ミリ秒経過したためタイムアウトしました`)
      );
    }, timeoutMs);
  });
}

function inifinitLoop() {
  let counter = 1;
  while (true) {
    counter++;
    if (counter % 1000 === 0) {
      console.log("counter: ", counter);
    }
  }
}
