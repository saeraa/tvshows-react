import React, { memo } from 'react'
import { Context } from "../Context"
import WatchlistItem from "./WatchlistItem"

const Watchlist = memo((props) => {
    const { watchlist } = React.useContext(Context)

    const displayResults = watchlist.map(item => {
        return (
            <WatchlistItem
                id={item.show.id}
                key={item.show.id}
                show={item}
                image={item.show.image.medium}
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

    return (
        <main>
            {displayResults}
        </main>
    )
})


export default Watchlist