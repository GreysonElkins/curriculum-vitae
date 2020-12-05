import React from 'react'

import desk from '../../images/office/desk.png'
import speakerL from '../../images/office/speaker-L.png'
import speakerR from '../../images/office/speaker-R.png'
import laptop from '../../images/office/laptop.png'

import './Office.scss'

const Office: React.FC = () => {
  return (
    <main>
      <div className="room">
        <div className="desk-top">
          {/* <img 
            src={speakerL} 
            alt="A desk-top speaker" 
            className="speaker"
            /> */}
          <img 
            src={laptop} 
            alt="laptop" 
            className="laptop"
          />
          {/* <img 
            src={speakerR} 
            alt="A desk-top speaker" 
            className="speaker"
          /> */}
        </div>
        <img 
          src={desk} 
          alt="A mid-century modern desk" 
          className="desk"
        />
      </div>
    </main>
  )
}

export default Office