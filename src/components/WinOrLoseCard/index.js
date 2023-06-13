// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {status, score, onClickPlayAgain} = props
  let imageUrl
  let displayText
  let result
  if (status === 'won') {
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    displayText = 'You Won'
    result = 'Best Score'
  } else {
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    displayText = 'You Loss'
    result = 'Score'
  }

  const onPlayAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="win-loss-card">
      <div className="win-loss-details">
        <h1 className="result-text">{displayText}</h1>
        <p className="sub-result">{result}</p>
        <p className="points">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or loss" className="win-loss-img" />
    </div>
  )
}

export default WinOrLossCard
