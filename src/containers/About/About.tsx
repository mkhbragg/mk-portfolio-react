import React, { FC } from 'react'

import ScrollingText from '../../components/UI/ScrollingText/ScrollingText'
import styles from './About.module.scss'
import exportedStyles from '../../assets/sass/style.module.scss'
import photo from '../../assets/images/mkhb_grayscale.jpg'

export const About: FC<any> = (props) => {
  const abilities = [
    { id: 0, label: 'UI developer' },
    { id: 1, label: 'researcher' },
    { id: 2, label: 'UX hobbyist' },
    { id: 3, label: 'tinkerer' },
    { id: 4, label: 'curious mind' },
    { id: 5, label: 'jiu jitsu purple belt' },
    { id: 6, label: 'Lego addict' },
  ]

  return (
    <div className={styles.About}>
      <div>
        Hi! I'm Mariah, a highly motivated <ScrollingText items={abilities} />{' '}
        in pursuit of best practices, intuitive designs, and compelling groups
        of three.
      </div>
      <img
        className="Image"
        src={photo}
        alt="Mariah"
        style={{
          background:
            props.themeName === 'dark-theme'
              ? exportedStyles.darkThemeWell
              : exportedStyles.lightThemeWell,
        }}
      />
    </div>
  )
}

export default About
