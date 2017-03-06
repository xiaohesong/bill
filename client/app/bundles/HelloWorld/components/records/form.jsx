import React from 'react';
export default class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title: '',
      amount: ''
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) =>{
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    var _this = this
    $.ajax({
      url: '/records',
      method: 'post',
      data: {record: this.state},
      success: function(data){
        _this.setState({
          title: '',
          amount:'',
          date: ''
        })
        _this.props.createFinished(data)
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
