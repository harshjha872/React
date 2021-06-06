import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            ErrorMessage: null
        }
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
            },
            err => {
                this.setState({ ErrorMessage: err.message })
            }
        )
    }

    render() {
        if (this.state.ErrorMessage && !this.state.latitude && !this.state.longitude)
            return (
                <div>
                    Error: {this.state.ErrorMessage}
                </div>

            );

        if (!this.state.ErrorMessage && !this.state.latitude && !this.state.longitude)
            return (
                <div>
                    Loading...
                </div>
            );

        return (
            <div>
                <div>
                    latitude: {this.state.latitude}

                </div>
                <div>
                    longitude: {this.state.longitude}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));