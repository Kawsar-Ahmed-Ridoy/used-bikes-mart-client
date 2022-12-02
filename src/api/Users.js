import { useEffect, useState } from "react"

export const Users = () =>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
    },[])
    console.log(users);
}