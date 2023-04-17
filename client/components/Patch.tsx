import { useState } from 'react'
import { Player } from '../../models/player'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
  socket: any
}

export default function Patch({ player, setPlayer, socket }: Props) {
  const {
    progress: { events },
  } = player
  const [convoStage, setConvoStage] = useState(0)

  const handleQuestion = () => {
    setConvoStage(2)
  }

  return (
    <div className="character">
      <p>
        {events.metPatch ? 'Patch' : 'A witch in a pointy hat'} sits behind the
        Salon&apos;s counter, their hair slowly and subtly changing color
      </p>
      {convoStage === 0 ? (
        <button onClick={() => setConvoStage(1)}>
          Talk to {events.metPatch ? 'Patch' : 'them'}.
        </button>
      ) : convoStage === 1 ? (
        <>
          {events.metPatch ? (
            <p className="conversation">
              Hello again {player.char_name}! What can I help you with today?
            </p>
          ) : (
            <p className="conversation">
              Hi there! I&apos;m Patch and this is my Salon. It&apos;s a
              pleasure to meet you!
            </p>
          )}
          <button onClick={handleQuestion}>How does this salon work?</button>
        </>
      ) : (
        <>
          <p className="prompt">How does this Salon work?</p>
          <p className="conversation">
            Just stare into this Magic Mirror I made and focus on what you want
            to look like. Neat, huh!
          </p>
        </>
      )}
    </div>
  )
}
