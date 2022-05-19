import {FaTimes} from 'react-icons/fa'

const Character = ({character, onDelete}) => {
  return (
    <div className="task">
        <h3>
            {character.name} 
            <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick ={() => onDelete(character.id)}/>
        </h3>
        <p>
            H: {character.height}, M: {character.mass},  C: {character.eye_color}, S: {character.gender}
        </p>
    </div>
  )
}

export default Character