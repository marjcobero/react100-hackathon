import React, { Component } from 'react';
import axios from 'axios'
import Crypto from './viewCrypto';

class App extends Component {
    constructor(props) {
        super(props);

    this.state = {
        cryptos: []
    };
}

componentWillMount(){
    axios
        .get('https://api.coinlore.com/api/global/')
        .then(response => response.data)
        .then(cryptos => this.setState({ cryptos }));

}

render() {
    return (
        <div className='App'>
        
            <div className="wrapper">
            <div className="container">
            <img className='mr-3' src='https://serpapi.com/searches/61c3bb1624e88e2595daf2e1/images/957a3a1032682b76291a88b65602e86e4e713c2a3045f025950a047d12aba1da.jpeg'></img>
            <h1 className="display-4">Cryptocurrency (Global)</h1>
                { 
                this.state.cryptos.map(crypto => (
                <Crypto
                coins_count={crypto.coins_count}
                active_markets={crypto.active_markets}
                total_mcap={crypto.total_mcap}
                total_volume={crypto.total_volume} 
                btc_d={crypto.btc_d}
                eth_d={crypto.eth_d}
                mcap_change={crypto.mcap_change}
                /> ))
                }
                </div>
            </div>

        </div>
    );
    }
}

export default App;