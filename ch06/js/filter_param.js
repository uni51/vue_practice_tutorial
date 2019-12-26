// 6-2-2：フィルターの自作 - パラメータ付きのフィルターを定義する
// truncateフィルターの定義
Vue.filter('truncate', function(value, len = 10, omit ='...') {
  // 文字列でなければ元の値を返す
  if (typeof value !== 'string') {
    return value;
  }
  // 文字列長が指定文字列数（len）以下であれば、元の値を返す
  if (value.length <= len) {
    return value;
  // 指定文字数を超えたら、超過分を切り捨て、末尾文字を付与
  } else {
    return value.substring(0, len) + omit;
  }
});

new Vue({
  el: '#app',
  data: {
    memo: ''
  }
});