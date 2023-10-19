import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

const Contact = () => {
  const [comments, setComments] = useState([])
  const [count, setcount] = useState(0)
  const {Data} = useContext(UserContext)
  const render = ()=>{
    setcount(count+1)
  }
  useEffect(() => {
    const func1 = async ()=>{
      const data = await axios.get("https://jsonplaceholder.typicode.com/comments")
      setComments(data)
    }
func1()
  },[count])
  
  return (
    <>
    <div>username : {Data.username}</div>
    <div >password : {Data.password}</div>
<button onClick={render}>render </button>
   </>
  )
}


export default Contact