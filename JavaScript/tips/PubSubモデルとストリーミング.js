// PubSubモデルとストリーミング

// シンプルなPub/Sbuモデル
// ===============================================================
class SimpleStream {
  constructor() {
    this.dataListeners = [];
    this.endListener = null;
  }

  // サブスクライバーとなる関数を登録
  onData(callback) {
    this.dataListeners.push(callback);
  }

  // ストリーム終了時の処理を登録
  onEnd(callback) {
    this.endListener = callback;
  }

  sendData(dataChunks) {
    // チャンクごとにループ処理でサブスクライバー＝リスナーを呼び出し
    dataChunks.forEach((chunk, index) => {
      setTimeout(() => {
        // チャンクごとに登録されている全てのサブスクライバー関数を実行
        this.dataListeners.forEach((listners) => listners(chunk));

        // 最後のチャンクに対する処理
        if (index === dataChunks.length - 1) {
          console.log("No more data");
          this.endListener(chunk);
        }
      }, index * 1000);
    });
  }
}

const stream = new SimpleStream();

// サブスクライバーを登録
stream.onData((chunk) => {
  console.log(`Received chunk: ${chunk}`);
});

// ストリーム終了時の処理を登録
stream.onEnd((message) => {
  console.log(message);
});

// パブリッシャー
const dataChunks = ["Hello, ", "this ", "is ", "a ", "streaming ", "test!"];
stream.sendData(dataChunks);

// Node.jsのEventEmitterを利用したストリームのPub/Subモデル
// https://hireroo.io/journal/tech/implementing-event-emitter-with-typescript-for-beginner
// ===============================================================
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listeners) => listeners(data));
    }
  }
}

// データの送信
function sendData(emitter, dataChunks) {
  dataChunks.forEach((chunk, index) => {
    setTimeout(() => {
      emitter.emit("data", chunk);
      if (index === dataChunks.length - 1) {
        emitter.emit("end", "No more data");
      }
    }, index * 1000);
  });
}

// データの受信
function receiveData(emitter, func) {
  emitter.on("data", func);
}

function printReceivedData(message) {
  console.log(message);
}

// サブスクライバーの登録
const emitter = new EventEmitter();
receiveData(emitter, printReceivedData());

// データ送信
const dataChunks1 = ["Hello, ", "this ", "is ", "a ", "streaming ", "test!"];
sendData(emitter, dataChunks1);

// ===============================================================
