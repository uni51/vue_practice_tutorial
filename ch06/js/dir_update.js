// 6-1-2：ディレクティブ - 属性値の変化を検出する
Vue.directive('highlight', {
  // 紐づいた時の処理（初回のみ）
  bind: function(el, binding, vnode, oldVnode) {
    el.style.backgroundColor = binding.value;
  },
  // 上位コンポーネントが変化した時　
  update: function(el, binding, vnode, oldVnode) {
    el.style.backgroundColor = binding.value;
  }
});

new Vue({
  el: '#app',
  data: {
    color: 'yellow'
  }
});