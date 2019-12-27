// 6-4-1：ミックスインの基本
// ミックスインを準備
let dataLoggable = {
  mounted: function() {
    console.log(this.$data);
  }
}

// my-compコンポーネントを生成
Vue.component('my-comp', {
  data: function() {
    return {
      current: new Date()
    }
  },
  template: `<div>現在時刻: {{ current }}</div>`,
  // ミックスインを組み込み
  mixins: [ dataLoggable ]
});

new Vue({
  el: '#app'
});