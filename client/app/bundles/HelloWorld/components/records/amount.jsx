import React from 'react';

export default class Amount extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='col-md-4'>
        <div className={'panel panel-' + this.props.type }>
          <div className='panel-heading'>
            {this.props.text}
          </div>
          <div className='panel-body'>
            { this.props.amount }
          </div>
        </div>
      </div>
    )
  }
}
