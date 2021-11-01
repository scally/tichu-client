// TODO Move everything that knows how or where to send API reqs here

export function get() {
  const host = process.env.TICHU_SERVER_HOST || 'localhost:9292'

  return {
    ping: () => fetch(`http://${host}/ping`),
    connect: ({game_id, player_id}: {game_id: string, player_id: string}) =>
      new WebSocket(
        `ws://${host}/connect?game_id=${game_id}&player_id=${player_id}`
      ),
    new: ({name, shortGame}: {name: string, shortGame: boolean}) => fetch(`http://${host}/new`, {
      method: 'POST',
      body: JSON.stringify({ name: name, end_score: shortGame ? 500 : 1000 })
    })
  }
}