import {useState, useCallback, useEffect} from 'react'
import { useHistory } from "react-router-dom";

const storageName = 'userData'

export const useAuth = () =>{
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const login = useCallback((jwtToken, id)=>{
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token:jwtToken
        }))

        setIsAuthenticated(true)
    }, [])

    const logout = useCallback(()=>{
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
        setIsAuthenticated(false)
    }, [])

    useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(storageName))
        if(data && data.token){
            login(data.token, data.userId)
        }
    },[login])

    return {login, logout, token, userId, isAuthenticated}
}