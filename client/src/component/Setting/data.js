import React, { Component } from 'react';

class Data extends Component {
  render() {
    return (
      <div className="well">
        <ul className="nav nav-tabs">
          <li className="active">
            <a href="#home" data-toggle="tab">
              Profile
            </a>
          </li>
          <li>
            <a href="#profile" data-toggle="tab">
              Password
            </a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane active in" id="home">
            <form id="tab">
              <label>Username</label>
              <input type="text" value="jsmith" className="input-xlarge" />
              <label>First Name</label>
              <input type="text" value="John" className="input-xlarge" />
              <label>Last Name</label>
              <input type="text" value="Smith" className="input-xlarge" />
              <label>Email</label>
              <input
                type="text"
                value="jsmith@yourcompany.com"
                className="input-xlarge"
              />
              <label>Address</label>
              <textarea value="Smith" rows="3" className="input-xlarge">
                2817 S 49th Apt 314 San Jose, CA 95101
              </textarea>
              <div>
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
          <div className="tab-pane fade" id="profile">
            <form id="tab2">
              <label>New Password</label>
              <input type="password" className="input-xlarge" />
              <div>
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
