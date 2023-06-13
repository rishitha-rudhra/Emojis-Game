// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, status} = props
  return (
    <ul className="nav-container">
      <li className="nav-item-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </li>
      {status === 'play' && (
        <li className="nav-item">
          <p>Score: {score}</p>
        </li>
      )}
      {status === 'play' && (
        <li className="nav-item">
          <p>Top Score: {topScore}</p>
        </li>
      )}
    </ul>
  )
}

export default NavBar
