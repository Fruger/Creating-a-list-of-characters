import { useState } from 'react'

const AddCharacter = ({onAdd}) => {
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [mass, setMass] = useState('')
    const [eye_color, setEyeColor] = useState('')
    const [gender, setGender] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please Add A Character')
            return
        }

        onAdd({name, height, mass, eye_color, gender})

        setName('')
        setHeight('')
        setMass('')
        setEyeColor('')
        setGender('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}> 
        <div className='form-control'>
            <label>Name</label>
            <input type='text' placeholder='Add Name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Height</label>
            <input type='text' placeholder='Add Height' value={height} onChange={(e) => setHeight(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Mass</label>
            <input type='text' placeholder='Add Mass' value={mass} onChange={(e) => setMass(e.target.value)}/>
        </div>
        <div className='form-control form-control-select'>
            <label>Eye Color</label>
            <select
            placeholder='Select Eye Color' 
            value={eye_color} 
            onChange={(e) => setEyeColor(e.target.value)}>
                <option value=''>Select Eye Color</option>
                <option value='blue'>Blue</option>
                <option value='brown'>Brown</option>
                <option value='green'>Green</option>
                <option value='gray'>Gray</option>
                <option value='red'>Red</option>
                <option value='yellow'>Yellow</option>
                <option value='black'>Black</option>
                <option value='orange'>Orange</option>
            </select>
        </div>
        <div className='form-control form-control-select'>
            <label>Gender</label>
            <select
            placeholder='Select Gender' 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}>
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='n/a'>N/A</option>
            </select>
        </div>
        <input type='submit' value='Save Character' className='btn btn-block'/>
    </form>
  )
}

export default AddCharacter