// 6-3-3：プラグインの自作
// プラグインを定義
let MyUtil = {
  install : function(Vue, options) {
    // trimフィルターを定義
    Vue.filter('trim', function(value) {
      if (typeof value !== 'string') {
        return value;
      }
      return value.trim();
    });
  }
};

Vue.use(MyUtil);

new Vue({
  el: '#app',
  data: {
    str: '  WINGS Project  '
  }
});