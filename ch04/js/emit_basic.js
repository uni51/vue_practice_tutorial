// 子コンポーネント
Vue.component('my-counter', {
  // ボタンクリックでカウントする値
  props: [ 'step' ], 
  // クリック時にカウントアップ処理を実行
  template: `<button type="button" v-on:click="onclick">
    {{ step }}</button>`,
  methods: {
    // クリック時にplusイベントを発生
    onclick() {
      this.$emit('plus', Number(this.step));
    }
  }
});

// 親コンポーネント
new Vue({
  el: '#app',
  data: {
    // カウンター値
    current: 0
  },
  methods: {
    onplus: function(e) {
      this.current += e;
    }
  }
});