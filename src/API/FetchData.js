
export const fetchData = async (url, options, setState) => {
    const res = await fetch(`https://accwarmer-api.herokuapp.com/${url}`, options)
    const data = await res.json()
    await setState(data)
    console.log(data)
}