class videoGame {
  constructor(name, genre, length, year, system, rating) {
    this.gameName = name
    this.gameGenre = genre
    this.gameLength = length
    this.gameYear = year
    this.gameSystem = system
    this.gameGood = rating
  }

  isGameLong() {
    if (this.gameLength === 'Short') {
      console.log('This game can be completed quickly')
    } else if ((this.gameLength) === 'Very Long') {
      console.log('This game will destroy your life')
    } else {
      console.log('Not sure what to say')
    }
    return this.gameLength
  }
}

const game1 = new videoGame(
  'Rocket League',
  'Sports',
  'Short',
  '2015',
  'All systems',
  '10'
)
const game2 = new videoGame(
  'Lost Ark',
  'MMORPG',
  'Very Long',
  '2022',
  'PC',
  '8'
)
const game3 = new videoGame(
  'Call Of Duty',
  'Shooter',
  'Short',
  '2022',
  'All Systems',
  '7'
)

// console.log(game1)
console.log(game2)
// console.log(game3)
console.log(game2.isGameLong())
