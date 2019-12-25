// 6-2-1：フィルターの基本
// trimフィルターを宣言
Vue.filter('trim', function(value) {
  if (typeof value !== 'string' ){
    return value;
  }
  return value.trim();
});

new Vue({
  el: '#app',
  data: {
    str: '  WINGS Project  '
  }
});