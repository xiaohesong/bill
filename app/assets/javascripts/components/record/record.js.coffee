@Record = React.createClass
  render: ->
    React.DOM.tr null,
      React.DOM.td null, @props.record.date
      React.DOM.td null, @props.record.title
      React.DOM.td null, amountFormat(@props.record.amount)
      React.DOM.td null,
        React.DOM.a
          className: 'btn btn-danger'
          onClick: @handleDelete
          'Delete'

  handleDelete: (e)->
    e.preventDefault();
    $.ajax
      method: 'delete',
      url: "/records/#{ @props.record.id }"
      success: () =>
        @props.handleDeleteRecord @props.record
