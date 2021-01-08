import {useState, useEffect} from 'react'

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://accwarmer-api.herokuapp.com/' + url, options)
                const json = await res.json()
                 setResponse(json)
            } catch (error) {
                setError(error)
            }
        }
         fetchData()
    }, [])
return {response, error}
}

export {useFetch}