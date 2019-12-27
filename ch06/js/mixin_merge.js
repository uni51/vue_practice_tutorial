// 6-4-2：ミックスイン マージのルール
// tagsオプションのマージルールを定義 
Vue.config.optionMergeStrategies.tags = function (toVal, fromVal) {
  if (!toVal) { toVal = []; }
  if (!fromVal) { fromVal = []; }
  return fromVal.concat(toVal);
};

// tagsオプションを持つミックスイン
let tagin = {
  tags: [ 'tag', 'starategy' ]
}

// コンポーネント側もtagsオプションを定義
Vue.component('my-comp', {
  tags: [ 'component', 'sample' ],
  template: `<div>{{$options.tags}}</div>`,
  // ミックスインを組み込み
  mixins: [ tagin ]
});

new Vue({
  el: '#app'
});