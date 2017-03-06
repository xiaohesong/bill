import React from 'react';
export default class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title: '',
      amount: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.valid = this.valid.bind(this);
  }

  handleChange(e) {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    $.ajax({
      url: '/records',
      method: 'post',
      success: function(date){
        
      }
    })
  }

  valid() {
    return this.state.title != "" && this.state.date != "" && this.state.amount != ""
  }

  render() {
    return(
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type='text' className='form-control' placeholder='Date' name='date'
                 value={this.state.date} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type='text' className='form-control' placeholder='Title' name='title'
                 value={this.state.title} onChange={this.handleChange}/>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Amount' name='amount'
                 value={this.state.amount} onChange={this.handleChange}/>
        </div>
        <button type='submit' className='btn btn-primary' disabled={!this.valid()} >
          Create record
        </button>
      </form>
    )
  }
}
