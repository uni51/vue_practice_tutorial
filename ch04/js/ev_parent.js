// my-childコンポーネントを定義
Vue.component('my-child', {
  data: function() {
    return {
      message: ''
    }
  },
  template: `<p>子：{{ message }}</p>`,
  mounted: function() {
    this.$parent.message = '子から設定';
  }
});

// 親コンポーネント
new Vue({
  el: '#app',
  data: {
    message: ''
  },
  // マウント時に子のmessageを設定
  mounted: function() {
    this.$refs.child.message = '親から設定';
  }
});