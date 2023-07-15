import { FormEvent, useState, useEffect, ChangeEvent } from 'react'

interface PokemonData {
  id: number
  name: string
  sprites: {
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string
          }
        }
      }
    }
  }
}

const GameboyUI: React.FC = () => {
  const [pokemonId, setPokemonId] = useState<number>(1)
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')

  const fetchPokemon = async (pokemon: string | number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (response.ok) {
      const data = (await response.json()) as PokemonData
      setPokemonData(data)
      setIsLoading(false)
      setSearch('')
    } else {
      setPokemonData(null)
    }
  }

  useEffect(() => {
    fetchPokemon(pokemonId)
  }, [pokemonId])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchPokemon(search.toLowerCase())
  }

  const handlePrev = () => {
    if (pokemonId > 1) {
      setPokemonId(pokemonId - 1)
    }
  }

  const handleNext = () => {
    setPokemonId(pokemonId + 1)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <section className=''>
      {pokemonData ? (
        <>
          <div className='flex flex-col items-center mt-3 gameboy-screen'>
            <p className='text-sm text-black'>{`<#${pokemonData.id}>`}</p>
            <h1 className='font-semibold tracking-tight text-black capitalize text-md'>
              {pokemonData.name}
            </h1>
          </div>
          <img
            src={
              pokemonData?.sprites.versions['generation-v']['black-white']
                .animated.front_default
            }
            alt='pokemon image'
            className='absolute bottom-[45%] left-[40%] h-2/6'
          />
        </>
      ) : (
        <h1>Pokemon not found</h1>
      )}

      <form className='form' onSubmit={handleSubmit}>
        <input
          type='search'
          className='input__search'
          placeholder='Name or Number'
          value={search}
          onChange={handleChange}
          required
        />
      </form>

      <div className='buttons'>
        <button onClick={handlePrev} className='button btn-prev'>
          Prev &lt;
        </button>
        <button onClick={handleNext} className='button btn-prev'>
          Next &gt;
        </button>
      </div>
    </section>
  )
}

export default GameboyUI
