import { useEffect, useState } from 'react'
import StartGameDialog from "./StartGameDialog"
import Game from "./Game"

export default function Index() {
  const [gameParams, setGameParams] = useState<{game_id?: string, player_id?: string}>({
    game_id: undefined,
    player_id: undefined
  })

  useEffect(() => {
    const hash_params = window.location.hash.match(/^#(\w+):?(\w*)$/)
    if (hash_params) {
      const [_, game_id, player_id] = hash_params
      setGameParams({
        game_id,
        player_id,
      })      
    }
  }, [])

  return gameParams.game_id && gameParams.player_id ? 
    <Game game_id={gameParams.game_id} player_id={gameParams.player_id}/> :
    <StartGameDialog />
}

