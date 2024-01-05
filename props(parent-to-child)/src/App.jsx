import { useState } from 'react'

function ChildComponent({ name }) {

  return <h2>Hi,{name}</h2>
}

function App() {
  const [formData, setFormData] = useState({
    name: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <lebel>Name</lebel>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <ChildComponent name={formData.name} />
    </>
  )
}

export default App
