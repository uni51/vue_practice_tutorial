new Vue({
  el: '#app',
  data: {
    email: 'Y-Suzuki@example.com'
  },
  // 演算した結果を取得する算出プロパティ
  computed: {
    localEmail: function() {
      return this.email.split('@')[0].toLowerCase();
    }
  }
})