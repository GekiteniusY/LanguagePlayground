// タグ関数
// 参考：https://qiita.com/shimajiri/items/02d376beffd8b9d40aaf

// 1. サンプル
// ===============================================================

/**
 * テンプレートリテラル解析用の関数
 * @param {*} strings テンプレートリテラルが解析された結果が渡される、stringの配列
 * @param {*} id テンプレートリテラル内で使用された1つ目の変数が渡される
 */
function setUser(strings, id) {
  console.log('strings: ', strings);
  console.log('id: ', id);

  let userName = "ゲスト";
  switch (id) {
    case 1:
      userName = "島尻";
      break;
    case 2:
        userName = "山田";
        break;
    case 3:
        userName = "田中";
        break;
    default:
        break;
  }

  return `${strings[0]}${userName}${strings[1]}`;
}

const userId = 1;
const result1 = setUser`こんにちは${userId}さん`;
// strings = [ 'こんにちは', 'さん' ]
// id = 1

const result2 = setUser`こんにちはさん`;
// strings = [ 'こんにちはさん' ]
// id = undefined

console.log(result1); // -> こんにちは島尻さん
console.log(result2); // -> こんにちはさんゲストundefined