import React from 'react'
import '../style/Toolbar.css'
export default class Toolbar extends React.Component {
  render () {
    return (
      <div id="toolbar">
        <i class="glyphicon glyphicon-plus" onClick={this.props.addNewNote}></i>
        <i class={this.props.nowNote.favorite ? 'glyphicon glyphicon-star active' : 'glyphicon glyphicon-star'} onClick={this.props.toFavorite}></i>
        <i class="glyphicon glyphicon-remove" onClick={this.props.delNote}></i>
      </div>
    )
  }
}