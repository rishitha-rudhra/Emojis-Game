// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onEmojiClick} = props
  const {id} = emojiDetails

  const onEmojiClicked = () => {
    onEmojiClick(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-btn" onClick={onEmojiClicked}>
        <img
          src={emojiDetails.emojiUrl}
          alt={emojiDetails.emojiName}
          className="emoji"
        />
      </button>
    </li>
  )
}

export default EmojiCard
