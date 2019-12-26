// 6-3-1：プラグインの利用と自作 検証用プラグインの利用 VeeValidateに自作の検証ルールを追加
Vue.use(VeeValidate, { locale: 'ja', fastExit: false });

new Vue({
  el: '#app',
  // Vue初期化時に自作ルールを追加
  created:function() {
    this.$validator.extend('ngword', {
      // 検証エラー時のメッセージを取得
      getMessage(field, args) {
        return field + 'で「'+ args + '」は利用できない単語です。';
      },
      // 検証本体（検証の成否をtrue/falseで返す）
      validate(value, args) {
        return args.every(function(arg) {
          // それぞれの値（arg）が入力値valueに含まれないか（indexOfメソッドが-1であるか）を判定する
          return value.indexOf(arg) === -1;
        });
      }
    });
  },
});