new Vue({
  el: '#app',
  data: {
    gameStart: false,
    you: 100,
    monster: 100
  },
  watch: {
    monster() {
      const vm = this
      
      setTimeout(function() {
        const monsterAttack = Math.floor(Math.random() * 10) + 1
        vm.you -= monsterAttack
      }, 500)
    }
  },
  methods: {
    handleNewGameClick() {
      this.gameStart = true
    },
    handleAttack() {
      const yourAttack = Math.floor(Math.random() * 10) + 1
      this.monster -= yourAttack
    }
  }
})