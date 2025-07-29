'use strict';
const choices = {
  "体調不良": ["トヨタ記念病院へ行こう https://www.toyota-mh.jp/"],
  "緊張状態": ["深呼吸してみよう！", "音楽聴こう！", "散歩しよう！"],
  "機内食": ["ビーフ", "チキン", "フィッシュ"],
  "眠気あり": ["ストレッチしてみるといいよ！", "10分仮眠しましょう。"],
  "飲み会招待": ["断ってOK", "一次会だけ楽しもう！", "ガンガン行こうぜ！"],
  "通勤方法": ["もちろんトヨタ車で！", "今日は在宅で", "今日は電車で！"],
  "JS迷子": ["MDNを見る", "スラックのhelpチャンネル","七海さんに聞く"]
};
function alertNavi(label) {
  const options = choices[label];
  if (options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selected = options[randomIndex];
    alert(`幸せになれる選択: ${selected}`);
  } 
}
