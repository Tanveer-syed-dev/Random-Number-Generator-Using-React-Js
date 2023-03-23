// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickGenerateNum = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-number-generate-container">
          <h1 className="heading">Random Number</h1>
          <p className="disc">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onClickGenerateNum}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
