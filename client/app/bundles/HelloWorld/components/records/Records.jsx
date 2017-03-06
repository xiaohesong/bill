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
    this.handleDeleted = this.handleDeleted.bind(this)
  }


  createFinished(data){
    let records = this.state.records
    records.push(data)
    this.setState({
      records: records
    })
  }

  creditAmount() {
    let records = this.state.records
    let credits = records.filter(record => record.amount >= 0)
    return credits.reduce(function(add,item){
      return add + item.amount
    },0)
  }

  debitAmount() {
    let records = this.state.records
    let debits = records.filter(record => record.amount < 0)
    return debits.reduce(function(add,item){
      return add + item.amount
    },0)
  }

  balanceAmount() {
    return this.creditAmount() + this.debitAmount()
  }

  handleDeleted(deleteRecord){
    let records = this.state.records
    let index = records.indexOf(deleteRecord)
    records.splice(index, 1)
    this.setState({
      records: records
    })
  }

  render() {
    return(
      <div className='records'>
        <h2 className='title'>Records</h2>
        <div className='row'>
          <Amount type='success' amount={this.creditAmount()} text='Credit'/>
          <Amount type='danger' amount={this.debitAmount()} text='Debit'/>
          <Amount type='info' amount={this.balanceAmount()} text='Blance'/>
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
                  <Record record={record} key={record.id} handleDeleted={this.handleDeleted}/>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
