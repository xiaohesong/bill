import React from 'react';
export default class Record extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
    // this.handleClickDelete = this.handleClickDelete.bind(this)
    // this.handleClickSetToForm = this.handleClickSetToForm.bind(this)
    // this.handleToUpdate = this.handleToUpdate.bind(this)
  }

  handleClickDelete = (e) => {
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

  handleClickSetToForm = (e) => {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit
    })
  }

  handleToUpdate = (e) => {
    e.preventDefault();
    var _this = this
    let record = {
      title: this.refs.title.value,
      amount: this.refs.amount.value,
      date: this.refs.date.value
    }
    $.ajax({
      url: '/records/'+ this.props.record.id,
      method: 'put',
      data: {record: record},
      success: function(data){
        _this.props.handleUpdated(_this.props.record, data)
        _this.setState({
          edit: false
        })
      }
    })
  }

  render() {
    if(this.state.edit == true ){
      return this.renderForm()
    }else {
      return this.renderShow()
    }
  }

  renderShow() {
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{this.props.record.amount}</td>
        <td>
          <a className='btn btn-default' onClick={
              this.handleClickSetToForm
            } >
            Edit
          </a>
          <a className='btn btn-danger' onClick={
              this.handleClickDelete
            } >
            Delete
          </a>
        </td>
      </tr>
    )
  }

  renderForm() {
    return(
      <tr>
        <td>
          <input className='form-control' type='text' ref='date' name='date' defaultValue={this.props.record.date} />
        </td>
        <td>
          <input className='form-control' type='text' ref='title' name='title' defaultValue={this.props.record.title} />
        </td>
        <td>
          <input className='form-control' type='text' ref='amount' name='amount' defaultValue={this.props.record.amount} />
        </td>
        <td>
          <a className='btn btn-default' onClick={this.handleToUpdate}>
            Update
          </a>
          <a className='btn btn-danger' onClick={this.handleClickSetToForm}>
            Cancel
          </a>
        </td>
      </tr>
    )
  }
}
