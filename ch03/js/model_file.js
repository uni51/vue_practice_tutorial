new Vue({
  el: '#app',
  data: {
    message: ''  
  },
  methods: {
    onchange: function() {
      // アップロードファイルを準備
      let fl = this.$refs.upfile.files[0];
      let data = new FormData();
      data.append('upfile', fl, fl.name);
      // サーバにデータを送信
      fetch('upload.php', {
        method: 'POST',
        body: data,
      })
      // 成功時には結果を表示
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        this.message = text;
      })
      // 失敗時にはエラーメッセージをダイアログ表示
      .catch(function (error) {
        window.alert('Error: ' + error.message);
      })      
    }
  }
});