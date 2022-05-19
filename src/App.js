import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Characters from './components/Characters'
import AddCharacter from './components/AddCharacter'

const App=() =>{
  const [showAddCharacter, setShowAddCharacter] = useState (false)
  const [characters, setCharacters] = useState ([])

  useEffect(()=> {
    const getCharacters = async () => {
      const charactersFromServer = await fetchCharacters()
      setCharacters(charactersFromServer)
    }

    getCharacters()
  }, [])

  const fetchCharacters = async () => {
    const res = await fetch('http://localhost:5000/characters')
    const data = await res.json()

    return data
  }

  const addCharacter = async (character) => {
    const res = await fetch('http://localhost:5000/characters', {
    method:'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(character)
  })

  const data = await res.json()

  setCharacters([...characters, data])

    // const id = Math.floor(Math.random()*10000) + 1

    // const newCharacter = {id, ...character}
    // setCharacters([...characters, newCharacter])
  }

  const deleteCharacter = async (id) => {
    await fetch(`http://localhost:5000/characters/${id}`, {
      method:'DELETE'
    })

    setCharacters(characters.filter((character)=> character.id !== id))
  }

  return (
      <div className="container">
        <Header onAdd ={() => setShowAddCharacter(!showAddCharacter)} showAdd={showAddCharacter}/>
        <div className="form-control">
        <input type='number' placeholder="Height Above" onChange= {(event) => setCharacters([].concat(characters.filter((character) => character.height > Number(event.target.value))))}/>
        <input type='number' placeholder="Mass Above" onChange= {(event) => setCharacters([].concat(characters.filter((character) => character.mass > Number(event.target.value))))}/>
        </div>
        {showAddCharacter && <AddCharacter onAdd={addCharacter} />}
        {characters.length > 0 ? ( <Characters characters={characters} onDelete = {deleteCharacter}/>
        ): ('No Characters To Show')}
        <Footer />
      </div>
  );
}

export default App;
