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
    const {items} = this.props;
    const list = items.map((item,id) => {
      console.log(item.id,'check')
      return (
        <img src={item.img} key={id} className='img'onClick={item.img} alt="Product Image" />
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
    items: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    data: () => dispatch(data()),
    img: (id) => dispatch(img(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
