import axios from "axios"

const AuthService = {
    login: () => {
        console.log("Login")
    },

    register: () => {
        axios.get("http://localhost:4000")
        .then(data => {
            console.log(data.data)
        }).catch(e => {
            console.log(e)
        }) 
    }
}

export default AuthService