import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import Patch from './Patch'
import { useState } from 'react'

interface Props {
  player: Player
  updateEvents: (events: Record<string, boolean>) => void
  socket: any
}

function Salon({ player, updateEvents, socket }: Props) {
  const [contentStage, setContentStage] = useState(0)

  const handleClick = () => {
    if (contentStage < 2) {
      setContentStage(contentStage + 1)
    }
  }

  return (
    <>
      <div className="location-name">
        <h2>The Salon</h2>
      </div>
      {contentStage === 0 && (
        <div className="location-content-container">
          <div className="location-content">
            <p>
              The Salon is a cozy store with a{' '}
              <Link to="/update" className="link">
                Magic Mirror
              </Link>{' '}
              on the wall. Behind you is the door leading you back to the{' '}
              <Link to="/loc/town-square" className="link">
                Town Square
              </Link>
              .
            </p>
            <Patch
              player={player}
              updateEvents={updateEvents}
              socket={socket}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Salon
