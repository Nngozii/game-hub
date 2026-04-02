import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

interface Props {
  id: string,
  title: string
}

const GameGrid = ({}: Props) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get("/games").then((game) => {
      setGames(game.data)
    }).catch((err) => {
      setError(err.message)
    })
  }, [])

  return (
    <SimpleGrid>
        <ul>
          {games.map(game => <li key={game.id}>{game.title}</li>)}
        </ul>
    </SimpleGrid>
  )
}

export default GameGrid