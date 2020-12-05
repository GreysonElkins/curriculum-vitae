import React from 'react'

import desk from '../../images/office/desk.png'
import './Office.scss'

const Office: React.FC = () => {
  return (
    <main>
      <div className="room">
        <img src={desk} alt="A mid-century modern desk"/>
      </div>
    </main>
  )
}

export default Office