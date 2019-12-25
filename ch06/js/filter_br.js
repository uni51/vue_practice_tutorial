// 6-2-1：フィルターの自作 - 改行文字を<br>要素に変換する
// nl2brフィルターの定義
Vue.filter('nl2br', function(value) {
  // データ型のチェック
  if (typeof value !== 'string') {
    return value;
  }
  // 改行文字列の置換
  return value.replace(/\r?\n/g, '<br />');
});

new Vue({
  el: '#app',
  data: {
    memo: ''
  }
});