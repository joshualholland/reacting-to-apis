import React from 'react';

const Species = (props) => {
    return(
        <div className="row">
            {props.species.map((specie, index) => {
                return (
                    <div key={index} className="card border-secondary mb-3 m-2 mx-auto" style={{ maxWidth: 18 + "rem" }}>
                        <div className="card-header">Studio Ghibli</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">{specie.name}</h5>
                            <p className="card-text">{specie.classification}</p>
                            <h5 className="card-title text-secondary">Eye Colors</h5>
                            <p className="card-text">{specie.eye_colors}</p>
                            <h5 className="card-title text-secondary">Seen in:</h5>
                            <a className="card-text" target='_blank' href={specie.films}>Films</a>
                            <h5 className="card-title text-secondary">More info:</h5>
                            <a className="card-text" target='_blank' href={specie.id}>Species ID</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Species;