import './static/css/App.css';
import { CardTop } from './components/CardTop/CardTop'
import { OrderTable } from './components/OrderTable/OrderTable'
import React from 'react';

class App extends React.Component {
  state = {
    queryInfo: {}
  }
  render() {
    return (
      <div>
        <div className="nav">
          <p>订单列表</p>
        </div>
        <div className="card clearfix">
          <div className="card-top">
            <CardTop queryClick={this.query}/>
          </div>
          <div className="card-middle">
            <OrderTable queryInfo={this.state.queryInfo}/>
          </div>
        </div>
      </div>
    )
  }
  query = (queryInfo) => {
    this.setState({
      queryInfo: queryInfo
    })
  }
}

export default App;
