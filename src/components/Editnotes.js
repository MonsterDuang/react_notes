import React from 'react'
import '../style/Editnotes.css'
export default class Editnotes extends React.Component {
  
  render () {
    return (
      <div id="note-editor">
        <input type="text" value={this.props.nowNote.title} onChange={this.props.noteEditor}/>
        <textarea class="form-control" value={this.props.nowNote.content} onChange={this.props.noteEditor}></textarea>
    </div>
    )
  }
}