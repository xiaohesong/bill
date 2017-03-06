import React from 'react';
export default class Record extends React.Component{
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this)
  }

  handleClickDelete(e) {
    e.preventDefault();
    var _this = this
    $.ajax({
      url: "/records/"+ this.props.record.id,
      method: 'delete',
      success: function(data){
        console.log(_this.props);
        _this.props.handleDeleted(_this.props.record)
      }
    })
  }

  render() {
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{this.props.record.amount}</td>
        <td>
          <a className='btn btn-danger' onClick={
              this.handleClickDelete
            } >
            Delete
          </a>
        </td>
      </tr>
    )
  }
}
