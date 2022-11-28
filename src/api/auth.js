export const setAuthToken = user =>{
    const currentUser = {
        email: user.email,
    }

    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);

        localStorage.setItem('access-token', data.token)
    })
}