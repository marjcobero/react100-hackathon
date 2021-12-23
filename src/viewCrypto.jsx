import React from 'react';

export default props => (
<div className='container-2'>
    <ul>
        <li className="list-group-item list-group-item-primary">Current active Cryptocurrencies: <span className="badge badge-primary badge-pill">{props.coins_count}</span></li>

        <li className="list-group-item list-group-item-secondary">In the Market: <span className="badge badge-primary badge-pill">{props.active_markets}</span></li>

        <li className="list-group-item list-group-item-success">Total Market Cap(USD): <span className="badge badge-primary badge-pill">${props.total_mcap.toLocaleString()}</span></li>

        <li className="list-group-item list-group-item-danger">Total 24H Volume(USD): <span className="badge badge-primary badge-pill">${props.total_volume.toLocaleString()}</span></li>

        <li className="list-group-item list-group-item-warning">Bitcoins percentage of total Market Crypto Market Dominance: <span className="badge badge-primary badge-pill">{props.btc_d}%</span></li>

        <li className="list-group-item list-group-item-info">Etheriums percentage of total Market Dominance: <span className="badge badge-primary badge-pill">{props.eth_d}%</span></li>

        <li className="list-group-item list-group-item-light">Percentage of Market Cap change in the last 24 hours: <span className="badge badge-primary badge-pill">{props.mcap_change}%</span></li>
    </ul>
</div>
);


