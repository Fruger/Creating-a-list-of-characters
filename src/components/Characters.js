import Character from './Character'

const Characters = ({characters, onDelete}) => {

  return (
    <>
        {characters.map((character, /*,index*/) => (
        <Character key={character.id /*zamiast character.id można: index*/} character={character} onDelete ={onDelete}/>
        ))}
    </>
  )
}

export default Characters;