import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { data, img } from '../action';

class Home extends Component {
state = {
}
  componentWillMount() {
      this.props.data()
  }

  img = (event) => {
    const { id }= event.target.dataset;
    const { img } = this.props;
    img(id);
    console.log(id)
  }

  render() {
    console.log(this.props)
    const {user} = this.props;
    const list = user.map((data,id) => {
      console.log(data.id,'check')
      return (
        <img src={data.items} kye={id}  className='img'onClick={this.img}  />
      )
    })
    return (
      <div>
        <div>
          <Header history={this.props.history} location={this.props.location} />
        </div>
          {list}
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
    img: (id) => dispatch(img(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
