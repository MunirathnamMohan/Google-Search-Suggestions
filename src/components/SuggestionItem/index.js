// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, onDisplayText} = props
  const {id, suggestion} = item

  const onClikedOnArrow = () => {
    onDisplayText(id, suggestion)
  }
  return (
    <li className="bottom-con">
      <p>{suggestion}</p>
      <img
        className="arrow-img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClikedOnArrow}
      />
    </li>
  )
}

export default SuggestionItem
