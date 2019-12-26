// 6-3-1：プラグインの利用と自作 検証用プラグインの利用 VeeValidate
Vue.use(VeeValidate, { locale: 'ja', fastExit: false });

new Vue({
  el: '#app'
});