import { useState } from "react"

const Form = ({addColor}) => {
    const [color, setColor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(color)
    }
  return (
    <section>
        <h4>Color Gen</h4>
        <form onSubmit={handleSubmit}>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15004"/>
            <button type="submit">
                submit
            </button>
        </form>
    </section>
  )
}
export default Form