import React, { memo } from 'react'
import TVShow from "./TVShow"
import { Context } from "../Context"
import FadeIn from 'react-fade-in'



const Search = memo((props) => {
    const { shows, searchForShow } = React.useContext(Context)
    const [search, setSearch] = React.useState("")
    let displayResults

    if (shows[0] !== "error message") {
        displayResults = shows.map(item => {
            return (
                <TVShow
                    id={item.show.id}
                    key={item.show.id}
                    show={item}
                    image={item.show.image ? item.show.image.original : "nogo"}
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
    } else {
        displayResults = <p className='error-message'>Sorry, couldn't find any shows. Try again.</p>
    }

    function changeSearch(e) { setSearch(e.target.value) }

    function getResults() { searchForShow(search) }

    return (
        <main id="maincontent">
            <FadeIn delay={50}>
                <div className="search-container">
                    <input className="search-input" type="search" placeholder="Search for TV shows" value={search} onChange={changeSearch}
                        onKeyPress={(e) => { if (e.key === "Enter") { getResults() } }}
                    />
                    <button className="search-button" type="button" onClick={getResults}>Search</button>
                </div>
            </FadeIn>

            <div>
                {displayResults}
            </div>


        </main>
    )
})


export default Search