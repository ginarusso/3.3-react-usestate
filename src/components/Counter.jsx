import { useState } from 'react'

// const Counter = () => {
function Counter() {
    
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(prevCount => prevCount + 1)
    }

    const subtract = () => {
        // if (count > 0) {
        // setCount(prevCount => prevCount - 1)
        // console.log(count)
        //  } else {
        //     setCount(0)
        // }

        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <>
    <button onClick = {subtract}>-</button>
    <span>{count}</span>
    <button onClick = {add}>+</button>
    <button className = "resetBtn" onClick = {reset}>RESET</button>
    </>
  )
}

export default Counter