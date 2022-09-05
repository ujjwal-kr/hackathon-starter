import axios from "axios"

const AuthService = {
    login: async (data) => {
        try {
            const res = await axios.post("http://localhost:4000/users/login", data)
            return res.data
        } catch (e) {
            console.log(e)
        }
    },

    register: async (data) => {
        try {
           console.log(data)
           await axios.post("http://localhost:4000/users", data)
        } catch (e) {
            console.log(e)
        } 
    }
}

export default AuthService