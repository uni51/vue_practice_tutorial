// 子コンポーネント
Vue.component('my-input', {
  template: `<label>名前<input type="text" /></label>`
});

// 親コンポーネント
new Vue({
  el: '#app',
  methods: {
    onfocus: function(e) {
      console.log(e);
    }
  }
});