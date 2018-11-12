import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => {
                this.setState({ films: data })
            })
    }

    render() {
        if (this.state.films.length === 0) {
            return (
                <h1>Fetching films...</h1>
            )
        } else {
            return(
                <div>
                    <Card films={this.state.films} />
                </div>
            )
        }
    }
}

export default App