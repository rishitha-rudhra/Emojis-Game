import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

// Write your code here.
class EmojiGame extends Component {
  state = {
    clickedEmojisIds: [],
    topScore: 0,
    score: 0,
    status: 'play',
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      topScore:
        prevState.topScore > prevState.score
          ? prevState.topScore
          : prevState.score,
      clickedEmojisIds: [],
      score: 0,
      status: 'play',
    }))
  }

  onEmojiClick = id => {
    const {clickedEmojisIds} = this.state
    const emojiIndex = clickedEmojisIds.findIndex(eachItem => eachItem === id)
    if (emojiIndex === -1) {
      this.setState(prevState => ({
        clickedEmojisIds: [...prevState.clickedEmojisIds, id],
        score: prevState.score + 1,
      }))
    } else if (clickedEmojisIds.length === 12) {
      this.setState({
        score: 12,
        topScore: 12,
        status: 'won',
      })
    } else {
      this.setState(prevState => ({
        topScore:
          prevState.topScore > prevState.score
            ? prevState.topScore
            : prevState.score,
        status: 'loss',
      }))
    }
  }

  render() {
    const ShuffledList = this.shuffledEmojisList()

    const {score, topScore, status} = this.state

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} status={status} />

        {status === 'play' && (
          <ul className="emojis-container">
            {ShuffledList.map(eachEmoji => (
              <EmojiCard
                emojiDetails={eachEmoji}
                key={eachEmoji.id}
                onEmojiClick={this.onEmojiClick}
              />
            ))}
          </ul>
        )}
        {(status === 'won' || status === 'loss') && (
          <div className="win-loss-card-container">
            <WinOrLossCard
              status={status}
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          </div>
        )}
      </div>
    )
  }
}
export default EmojiGame
