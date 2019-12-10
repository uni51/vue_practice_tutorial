Vue.component('my-input', {
  props: [ 'value' ],
  template: `<label>
  名前：
  <input
    type="text" v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)" />
  </label>`
});

new Vue({
  el: '#app',
  data: {
    message: ''
  }
});