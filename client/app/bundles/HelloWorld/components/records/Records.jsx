// import React, { Component } from 'react';
import React from 'react';
import Amount from './amount'
import Form from './form'
import Record from './record'

export default class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: this.props.records
    }
    this.createFinished = this.createFinished.bind(this)
  }

  onRadChange = () => {
  };

  createFinished(data){
    console.log(this.records)
    let records = this.state.records
    records.push(data)
    this.setState({
      records: records
    })
  }

  render() {
    return(
      <div className='records'>
        <h2 className='title'>Records</h2>
        <div className='row'>
          <Amount type='success' amount='112' text='Credit'/>
          <Amount type='danger' amount='112' text='Debit'/>
          <Amount type='info' amount='112' text='Blance'/>
        </div>
        <Form createFinished={this.createFinished}/>
        <hr/>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.records.map((record,i)=>{
                return(
                  <Record record={record} key={record.id} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
