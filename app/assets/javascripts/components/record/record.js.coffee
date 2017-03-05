@Record = React.createClass
  recordData: ->
    React.DOM.tr null,
      React.DOM.td null, @props.record.date
      React.DOM.td null, @props.record.title
      React.DOM.td null, amountFormat(@props.record.amount)
      React.DOM.td null,
        React.DOM.a
          className: 'btn btn-default'
          onClick: @handleToggleEditOrRead
          'Edit'
        React.DOM.a
          className: 'btn btn-danger'
          onClick: @handleDelete
          'Delete'

  render: ->
    if @state.edit
      @recordForm()
    else
      @recordData()

  handleDelete: (e)->
    e.preventDefault();
    $.ajax
      method: 'delete',
      url: "/records/#{ @props.record.id }"
      success: () =>
        @props.handleDeleteRecord @props.record

  getInitialState: ->
    edit: false

  handleToggleEditOrRead: (e) ->
    e.preventDefault()
    @setState edit: !@state.edit

  recordForm: ->
    React.DOM.tr null,
      React.DOM.td null,
        React.DOM.input
          className: 'form-control'
          type: 'text'
          defaultValue: @props.record.date
          ref: 'date'
      React.DOM.td null,
        React.DOM.input
          className: 'form-control'
          type: 'text'
          defaultValue: @props.record.title
          ref: 'title'
      React.DOM.td null,
        React.DOM.input
          className: 'form-control'
          type: 'number'
          defaultValue: @props.record.amount
          ref: 'amount'
      React.DOM.td null,
        React.DOM.a
          className: 'btn btn-default'
          onClick: @handleUpdate
          'Update'
        React.DOM.a
          className: 'btn btn-danger'
          onClick: @handleToggle
          'Cancel'

  handleUpdate: (e)->
    e.preventDefault()
    data =
      title: this.refs.title.value
      date: this.refs.date.value
      amount: this.refs.amount.value
    $.ajax
      method: 'put'
      url: "/records/#{@props.record.id}"
      data:
        record: data
      success: (data)=>
        @setState edit: false
        @props.handleEditRecord @props.record, data
