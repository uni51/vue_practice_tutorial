new Vue({
  el: '#app',
  methods: {
    // サブミット時にダイアログを表示
    onsubmit: function(e) {
      if(!confirm('送信しても良いですか？')){
        e.preventDefault();
        return;
      }
    }
  }
});