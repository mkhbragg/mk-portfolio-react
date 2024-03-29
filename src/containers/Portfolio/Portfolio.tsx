import React, { Component } from 'react'
import Lottie from 'react-lottie'

import lightSquirrel from '../../assets/lotties/sleeping-squirrel.json'
import darkSquirrel from '../../assets/lotties/sleeping-squirrel-dark.json'
import './Portfolio.scss'

class portfolio extends Component<any, any> {
  render() {
    const themedSquirrel =
      this.props.themeName === 'dark-theme' ? darkSquirrel : lightSquirrel

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: themedSquirrel,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }

    return (
      <div className="Portfolio">
        <h2>Working on it! [Probably]</h2>
        <span>
          In the meantime, check my{' '}
          <a
            className="Default"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mkhbragg"
          >
            GitHub
          </a>
          .
        </span>
        <Lottie options={defaultOptions} height={400} width={400} />
        <div className="Caption">
          Lottie created by{' '}
          <a
            className="Light"
            href="https://lottiefiles.com/user/233502"
            target="_blank"
            rel="noreferrer"
          >
            Jonathan Ferreira
          </a>{' '}
          (and modified slightly by me)
        </div>
      </div>
    )
  }
}

export default portfolio
