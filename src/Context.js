import React, { useEffect } from "react"
import exampleSearch from "./exampleSearch"

const Context = React.createContext()

function ContextProvider({ children }) {

    // const [shows, setShows] = React.useState(exampleSearch)
    const [shows, setShows] = React.useState([])
    const [watchlist, setWatchlist] = React.useState([])
    const [search, setSearch] = React.useState("test")


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

    function addToWatchlist(show) {
        const found = watchlist.find(shows => shows.show.id === show.show.id)
        if (!found) {
            setWatchlist(prevShows => [...prevShows, show])
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