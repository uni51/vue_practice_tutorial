// 6-1-1：ディレクティブの基本
Vue.directive('highlight', {
  bind: function(el, binding, vnode, oldVnode) {
    el.style.backgroundColor = binding.value;
  }
});

new Vue({
  el: '#app',
  data: {
    color: 'yellow'
  }
});