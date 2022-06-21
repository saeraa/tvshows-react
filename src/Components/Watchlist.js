import React, { memo } from 'react'
import { Context } from "../Context"
import WatchlistItem from "./WatchlistItem"

const Watchlist = memo((props) => {
    const { watchlist } = React.useContext(Context)
    let displayResults
    if (watchlist.length === 0) {
        displayResults = <p className='error-message'>You don't have any shows in your watchlist.</p>
    } else {
        displayResults = watchlist.map(item => {
            return (
                <WatchlistItem
                    id={item.show.id}
                    key={item.show.id}
                    show={item}
                    image={item.show.image ? item.show.image.original : "nogo"}
                    // image={item.show.image ? item.show.image.original : "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}
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
    }


    return (
        <main id="maincontent">
            {displayResults}
        </main>
    )
})


export default Watchlist