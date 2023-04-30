import {Component} from 'react'

import './index.css'

class RandomNumberGenerartor extends Component {
  state = {number: 0}

  getRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerartor
