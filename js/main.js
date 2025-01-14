// 動画要素を取得
const video = document.getElementById('videoPlayer');

// 動画が終了したときに次の動画を再生するイベントを追加
video.addEventListener('ended', function() {
  // 動画のソースを次の動画に変更
  video.src = './images/reikyaku.MOV';  // 次の動画ファイル
  video.load();  // 新しい動画を読み込み
  video.play();  // 再生開始
});
