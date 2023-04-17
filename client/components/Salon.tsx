import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import Patch from './Patch'

interface Props {
  player: Player
  updateEvents: (events: Record<string, boolean>) => void
  socket: any
}

function Salon({ player, updateEvents, socket }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>The Salon</h2>
      </div>
      <div className="location-content-container">
        <p>
          The Salon is a cozy store with a{' '}
          <Link to="/update" className="link">
            Magic Mirror
          </Link>{' '}
          on the wall.
        </p>
        <Patch player={player} updateEvents={updateEvents} socket={socket} />
        <p>
          Behind you is the door leading you back to the{' '}
          <Link to="/loc/town-square" className="link">
            Town Square
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default Salon
