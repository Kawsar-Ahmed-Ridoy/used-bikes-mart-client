export const setAuthToken = (user, radio, name) =>{
    const currentUser = {
        email: user.email,
        name: name,
        seller: radio
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