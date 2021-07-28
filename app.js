new Vue({
  el: '#app',
  data: {
    gameStart: false,
    you: 100,
    monster: 100
  },
  methods: {
    handleNewGameClick() {
      this.gameStart = true
    },
    handleAttack() {
      const yourAttack = Math.floor(Math.random() * 10) + 1
      const monsterAttack = Math.floor(Math.random() * 10) + 1

      this.monster -= yourAttack
      this.you -= monsterAttack
    }
  }
})