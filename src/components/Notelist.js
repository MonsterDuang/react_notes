import React from "react"
import '../style/Notelist.css'
export default class Notelist extends React.Component {
  
  render () {
    return (
      <div id="notes-list">
        <div id="list-header">
          <h1>Notes</h1>
          <div class="btn-group btn-group-justified" role="group">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default" onClick={this.props.changeff}>All Notes</button>
            </div>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default" onClick={this.props.changeft}>Favorites</button>
            </div>
          </div>
        </div >
        <div class="container">
          <div class="list-group">
            {this.props.notesList.map((item, index) => {
              return (
                <a key={item.id} onClick={this.props.changeNowNote} id={index} class={this.props.nowNoteIndex === index ? 'list-group-item active' : 'list-group-item'}>
                  <h4 class="list-group-item-heading">{item.title}</h4>
                </a>
              )
            })}
          </div>
        </div>
    </div>
    )
  }
}