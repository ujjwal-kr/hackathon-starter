import { useEffect } from "react"
import AuthService from "../services/auth.service"

export default function Register() {
    useEffect(() => {
        AuthService.register()
    }, [])

    return <div>SignUp</div>
}