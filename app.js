new Vue({
  el: '#app',
  data: {
    gameStart: false
  },
  methods: {
    handleNewGameClick() {
      this.gameStart = true
    }
  }
})