import React, { memo } from 'react'
import { Context } from "../Context"
import tempImage from "../img/photo.avif"
import FadeIn from 'react-fade-in'


const TVShow = memo((props) => {
    const { show, id, image, url, name, rating, genres, premiered, ended, summary, country } = props
    const { addToWatchlist } = React.useContext(Context)

    function createMarkup() {
        return { __html: summary };
    }
    const showSummary = <div dangerouslySetInnerHTML={createMarkup()} />

    return (
        <FadeIn delay={200}>
            <section key={`${premiered}${id}`} className="show">

                <img className="show-img" src={image === "nogo" ? tempImage : image} alt="TV Show poster" />
                <div className="show-content">
                    <div className="show-title-rating">
                        <h2><a className="show-name" href={url} target="_blank" rel="noreferrer">{name}</a></h2>
                        <div className="added-to-watchlist">Added to watchlist!</div>
                        <button className="watchlist-button" type="text"
                            onClick={(event) => addToWatchlist(event, show)}>Add to watchlist</button>
                        <div className="added-to-watchlist already-in-watchlist">Already in watchlist!</div>
                    </div>

                    <div className="show-title-rating">
                        <span className="show-time">{premiered && `${premiered} - ${ended ? ended : "now"}`} </span>
                        {rating && <span className="show-rating">⭐ {rating}</span>}
                    </div>

                    <span className="show-genres">{genres.map((genre, index) => <span key={index} className="show-genre">{genre}</span>)}</span><br />
                    <span className="show-country">Country: {country}</span>
                    <hr />

                    <span className="show-summary">{showSummary}</span>
                </div>

            </section>
        </FadeIn>
    )
})


export default TVShow