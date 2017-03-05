// import React, { Component } from 'react';
import React from 'react';
export default class Records extends React.Component {
  constructor(props) {
    super(props);
    this.props.records
  }

  onRadChange = () => {
  };

  render() {
    return(
      <div className='records'>
        <h2 className='title'>Records</h2>
        <input
          id="name"
          type="text"
          value={this.props.records}
        />
      </div>
    )
  }
}
