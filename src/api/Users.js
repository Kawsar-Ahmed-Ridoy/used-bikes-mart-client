import { useEffect, useState } from "react"

export const Users = () =>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    },[])
    console.log(users);
}