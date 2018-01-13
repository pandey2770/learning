import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { data, img } from '../action';
import { connect } from 'react-redux';

class Home extends Component {

  componentWillMount() {
      this.props.data()
  }

  img = () => {
    img()
    console.log('asd',img())
  }

  render() {
    const {user} = this.props;
    const list = user.map(data => {
      return (
        <img src={data.items} className='img' onClick={this.img}   />
      )
    })
    return (
      <div>
        <div>
          <Header history={this.props.history} location={this.props.location} />
        </div>
        <div>
          {list}
          {/* {
            user.map(img => <div>
              {img.items}
            </div>)
          } */}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return  {
    user:state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    data: () => dispatch(data()),
    img: () => dispatch(img())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
