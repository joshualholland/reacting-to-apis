import React from 'react';

const Card = (props) => {
    return (
        <div className="row">
            {props.films.map((film, index) => {
                return (
                    <div key={index} className="card border-secondary mb-3" style={{ maxWidth: 18 + "rem" }}>
                        <div className="card-header">Studio Ghibli</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">{film.title}</h5>
                            <p className="card-text">{film.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;