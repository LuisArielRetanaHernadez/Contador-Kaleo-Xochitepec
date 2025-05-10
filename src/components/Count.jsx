import { useState } from 'react'
const Count = ({ name }) => {

  const [time, setTime] = useState([0, 0])

  return (
    <div>
      <div>
        <span>{time[0]}</span>
        <span>{time[0]}</span>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default Count