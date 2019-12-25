// 6-1-6：ディレクティブ - markedライブラリをラップする
Vue.directive('markdown', function(el, binding, vnode, oldVnode) {
  el.innerHTML = marked(el.textContent, binding.value);
});

new Vue({
  el: '#app',
  data: {
    options: {
      gfm: true,  // GitHub仕様のmarkdownを有効化
      breaks: true, // 単一改行を<br>タグにするか
      xhtml: true,  // 空タグを〜>に
    }
  },
});