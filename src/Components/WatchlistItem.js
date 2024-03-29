import React, { memo } from 'react'
import { Context } from "../Context"
import tempImage from "../img/photo.avif"
import FadeIn from 'react-fade-in'

const Watchlist = memo((props) => {
    const { id, image, url, name, rating, genres, premiered, ended, summary, country } = props
    const { removeFromWatchlist } = React.useContext(Context)

    function createMarkup() {
        return { __html: summary };
    }
    const showSummary = <div dangerouslySetInnerHTML={createMarkup()} />

    return (
        <FadeIn>
            <section key={id} className="show">
                <img className="show-img" src={image === "nogo" ? tempImage : image} alt="TV Show poster" />
                <div className="show-content">
                    <div className="show-title-rating">
                        <a className="show-name" href={url} target="_blank" rel="noreferrer">{name}</a>
                        <button className="watchlist-button" type="text"
                            onClick={() => removeFromWatchlist(id)}>Remove from watchlist</button>
                    </div>
                    <div className="show-title-rating">
                        <span className="show-time">{premiered && `${premiered} - ${ended ? ended : "now"}`} </span>
                        {rating && <span className="show-rating">⭐ {rating}</span>}
                    </div>
                    <span className="show-genres">{genres.map(genre => <span key={`${rating}${id}`} className="show-genre">{genre}</span>)}</span><br />
                    <span className="show-country">Country: {country}</span>
                    <hr />
                    <span className="show-summary">{showSummary}</span>
                </div>
            </section>
        </FadeIn>
    )
})


export default Watchlist