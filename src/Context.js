import React, { useEffect } from "react"
import exampleSearch from "./exampleSearch"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [shows, setShows] = React.useState([])
    const [watchlist, setWatchlist] = React.useState(JSON.parse(localStorage.getItem('watchlist')) || [])
    const [search, setSearch] = React.useState("test")

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist])

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
            .then((res) => res.json())
            .then(data => {
                if (data.length > 0) {
                    setShows(data)
                } else {
                    setShows(["error message"])
                }
            })
            .catch(err => console.log(err))
    }, [search])

    function addToWatchlist(event, show) {
        const found = watchlist.find(shows => shows.show.id === show.show.id)
        if (!found) {
            setWatchlist(prevShows => [...prevShows, show])
            event.target.classList.add("disabled")
            event.target.previousElementSibling.classList.add("visible")
            setTimeout(() => event.target.previousElementSibling.classList.remove("visible"), 1500)
        } else {
            event.target.classList.add("disabled")
            event.target.nextElementSibling.classList.add("visible")
            setTimeout(() => event.target.nextElementSibling.classList.remove("visible"), 1600)
        }
    }

    function searchForShow(value) {
        setSearch(value)
    }

    function removeFromWatchlist(id) {
        setWatchlist(prevShows => prevShows.filter(item => item.show.id !== id))
    }

    return (
        <Context.Provider value={{
            shows,
            watchlist,
            addToWatchlist,
            removeFromWatchlist,
            searchForShow
        }} >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }