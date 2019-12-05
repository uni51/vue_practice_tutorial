new Vue({
  el: '#app',
  data: {
    name: '匿名'
  },
  methods: {
    // ESCキーでテキストをクリア
    clear: function() {
      this.name='';
    }       
  }
});