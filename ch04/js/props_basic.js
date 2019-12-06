Vue.component('my-hello', {
  // プロパティを定義
  // props: [ 'yourName' ],

  props: {
    yourName: {
      type: String,
      required: true,
      // 文字数が5文字以内であれば成功
      validator: function(value) {
        return value.length <=5;
      }
    }
  },  
  template: `<div>こんにちは、{{ yourName }}さん！</div>`
})

new Vue({
  el: '#app'
});