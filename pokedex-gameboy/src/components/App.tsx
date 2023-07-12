import Gameboy from './Gameboy'
import GrassField from '../public/images/grassfield.png'
import { useState } from 'react'
import { Pokemon } from '../types/Pokemon'
import pokemonApi from '../helpers/pokemonApi'

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [searchedPokemon, setSearchedPokemon] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchPokemon = async (e: any) => {
    setSearchedPokemon(e.target.value)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (!searchedPokemon) {
      return
    }
    setIsLoading(true)
    try {
      const response = await pokemonApi.get(
        `/pokemon/${searchedPokemon.toLowerCase()}`
      )
      setPokemon(response.data)
      setSearchedPokemon('')
      setIsLoading(false)
    } catch (err: any) {
      setPokemon(null)
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <div className="">
      <img
        src={GrassField}
        alt="background"
        className="fixed bottom-0 left-0 flex w-full min-w-screen h-1/2 -z-50"
      />
      <Gameboy searchedPokemon={searchedPokemon} />
    </div>
  )
}

export default App
