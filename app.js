new Vue({
  el: '#app',
  data: {
    gameStart: false,
    you: 100,
    monster: 100,
    logs: []
  },
  methods: {
    handleNewGameClick() {
      this.gameStart = true
    },
    handleAttack({ isSpecial }) {
      const attackModifier = isSpecial ? 10 : 1
      const yourAttack = Math.floor(Math.random() * 10) + attackModifier
      this.monster -= yourAttack
      this.logs.unshift({
        text: `You hit the Monster for ${yourAttack} HP`,
        class: 'player-turn'
      })
      this.handleMonsterTurn()
    },
    handleHeal() {
      const heal = Math.floor(Math.random() * 10) + 1
      this.you += heal
      this.logs.unshift({
        text: `You healed yourself for ${heal} HP`,
        class: 'player-turn'
      })
      this.handleMonsterTurn()
    },
    handleMonsterTurn() {
      const vm = this
      
      setTimeout(function() {
        const monsterAttack = Math.floor(Math.random() * 10) + 1
        vm.you -= monsterAttack
        vm.logs.unshift({
          text: `The Monster hit You for ${monsterAttack} HP`,
          class: 'monster-turn',
        })
      }, 500)
    },
    handleGiveup() {
      this.gameStart = false
      this.you = 100
      this.monster = 100
      this.logs = []
    }
  }
})