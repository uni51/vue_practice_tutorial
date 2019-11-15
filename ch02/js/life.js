let app = new Vue({
  el: '#app',
  beforeCreate: function() {
    console.log('beforeCreate...')
  },
  created: function() {
    console.log('created...')
  },
  beforeMount: function() {
    console.log('beforeMount...')
  },
  mount: function() {
    console.log('mounted...')
  },
  beforeUpdate: function() {
    console.log('beforeUpdate...')
  },
  updated: function() {
    console.log('updated...')
  },
  beforeDestory: function() {
    console.log('beforeDestroy...')
  },
  destroyed: function() {
    console.log('destroyed...')
  }
});

// 300ミリ秒後に破棄
setTimeout(function() {
  app.$destroy();
}, 3000)