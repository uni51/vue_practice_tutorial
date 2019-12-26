// 6-2-3：フィルターの自作 - 複数のフィルターを自作する

// 絶対値を求めるabsフィルターを定義
Vue.filter('abs', function(value) {
  return Math.abs(value);
});

// 指定桁で丸めを行うnumberフィルターを定義
Vue.filter('number', function(value, dec = 0) {
  return value.toFixed(dec);
});


new Vue({
  el: '#app',
  data: {
    value: -150.3486
  }
});