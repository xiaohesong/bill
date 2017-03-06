import React from 'react';
export default class Record extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{this.props.record.amount}</td>
        <td>
          <a className='btn btn-danger' >
            Delete
          </a>
        </td>
      </tr>
    )
  }
}
