import React, { memo } from 'react'
import TVShow from "./TVShow"
import { Context } from "../Context"


const Search = memo((props) => {
    const { shows, searchForShow } = React.useContext(Context)
    const [search, setSearch] = React.useState("Search for shows")
    let displayResults
    console.log(shows)

    if (shows[0] !== "error message") {
        displayResults = shows.map(item => {
            return (
                <TVShow
                    id={item.show.id}
                    key={item.show.id}
                    show={item}
                    image={item.show.image ? item.show.image.original : "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}
                    url={item.show.url}
                    name={item.show.name}
                    rating={item.show.rating.average}
                    genres={item.show.genres}
                    country={item.show.network ? item.show.network.country.name : "N/A"}
                    premiered={item.show.premiered}
                    ended={item.show.ended}
                    summary={item.show.summary}
                />
            )
        })
    } else { displayResults = <p className='errorMessage'>Sorry, couldn't find any shows. Try again.</p> }

    function changeSearch(e) {
        setSearch(e.target.value)
    }

    function getResults() {
        searchForShow(search)
    }


    return (
        <main>
            <div className="search-container">
                <input className="search-input" type="search" placeholder="Search for things" value={search} onChange={changeSearch} />
                <button className="search-button" type="button" onClick={getResults}>Search</button>
            </div>

            <div>
                {displayResults}
            </div>


        </main>
    )
})


export default Search