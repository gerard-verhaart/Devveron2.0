import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
  addItems: (items: string[]) => void
  updateEvents: (events: Record<string, boolean>) => void
}

function TownSquare({ player, setPlayer, addItems, updateEvents }: Props) {
  const [contentStage, setContentStage] = useState(0)

  const handleClickNext = () => {
    if (contentStage < 2) {
      setContentStage(contentStage + 1)
    }
  }
  const handleClickBack = () => {
    if (contentStage > 0) {
      setContentStage(contentStage - 1)
    }
  }

  const getFalcon = useCallback(() => {
    addItems(['Millennium Falcon'])
    updateEvents({ foundFalcon: true })
  }, [addItems, updateEvents])

  return (
    <>
      <div className="location-name">
        <h2>Metellicana Town Square</h2>
      </div>
      <div className="location-content-container">
        {contentStage === 0 && (
          <div className="location-content typerwriter">
            <Link to={'/loc/woods'}>Woods</Link>
            <p className="townsquare-content-1 typewriter">
              You see a group of dimly lit buildings around a central fountain.
              A lowly street urchin appears...
            </p>
            <p>
              Street Urchin Pat:{' '}
              <span className="npc-quote">
                “Welcome fellow traveller, to our land of Devveron”
              </span>
              ...{' '}
              <span className="npc-quote">
                “You look a little lost and confused right now but be sure that
                you are in a safe place”
              </span>
              ...
              <span className="npc-quote">
                “There are many things to see and learn about in Devveron so
                please have a look about And have an adventure!”
              </span>
              ...{' '}
              <span className="npc-quote">
                “If you have the time, traveller - you ought to go to the Docks
                and see my friend Mayor Kelly..."
              </span>
            </p>

            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}

        {contentStage === 1 && (
          <div className="location-content typerwriter">
            <p className="townsquare-content-2 typewriter">
              <span className="npc-quote">
                "...should you go see them, I would really appreciate you
                deliver them a package consisting of a Lego set of the Millenium
                Falcon"
              </span>
              ...{' '}
              <p className="npc-quote">
                "The Mayor has been hiding Lego stashes around the world of
                Devveron so if you find any further Lego, please deliver it to
                the Mayor for a nice gold reward!”
              </p>
            </p>
            {player.progress.events.foundFalcon ? (
              <p>You have been offered a Lego Set of the Millenium Falcon</p>
            ) : (
              <button onClick={getFalcon}>
                Grab the Nine Iron Club on the ground?
              </button>
            )}
            <button className="back-content-button" onClick={handleClickBack}>
              ⬅
            </button>
            <button className="next-content-button" onClick={handleClickNext}>
              ⮕
            </button>
          </div>
        )}

        {contentStage === 2 && (
          <div className="location-content typerwriter">
            <p className="townsquare-content-3 typewriter">
              You can see a{' '}
              <Link to="/loc/tavern" className="link">
                Tavern
              </Link>
              , a{' '}
              <Link to="/loc/salon" className="link">
                Salon
              </Link>
              , a{' '}
              <Link to="/loc/church" className="link">
                Church
              </Link>{' '}
              and a{' '}
              <Link to="/loc/item-shop" className="link">
                Item Shop
              </Link>{' '}
              among the buildings. There is a{' '}
              <Link to="/loc/docks" className="link">
                Road
              </Link>{' '}
              off to the side which leads down to the Docks area, and behind you
              is the road leading back to the{' '}
              <Link to="/loc/town-entrance" className="link">
                Town Entrance
              </Link>{' '}
              .
            </p>
            <button className="back-content-button" onClick={handleClickBack}>
              ⬅
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default TownSquare
