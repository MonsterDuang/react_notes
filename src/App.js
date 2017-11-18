import React from 'react'
import Toolbar from "./components/Toolbar"
import Notelist from "./components/Notelist"
import Editnotes from "./components/Editnotes"
// 组件的模板内容跟vue一样，只能有一个顶级元素
const appStyle = {
  app: {
    width: '100%',
    height: '100%'
  }
}
export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      notesList: [],
      nowNoteIndex: 0,
      favoriteNotes: []
    }
  }
  addNote () {
    var obj = { title: 'New Note', content: 'Content...', id: Date.now(), favorite: false }
    let notesList = this.state.notesList
    let noteListLength = notesList.length > 0 ? notesList.length : 0
    notesList.push(obj)
    this.setState({
      notesList: notesList,
      nowNoteIndex: noteListLength,
      favoriteNotes: notesList
    })
  }
  noteEditor (e) {
    let nowNote = this.state.notesList[this.state.nowNoteIndex]
    if (e.target.type === 'text') {
      nowNote.title = e.target.value
    } else {
      nowNote.content = e.target.value
    }
    this.setState({
      notesList: this.state.notesList
    })
  }
  changeNowNote (e) {
    e.preventDefault()
    console.log(e.target.id)
    this.setState({
      nowNoteIndex: Number(e.target.id)
    })
  }
  toFavorite () {
    this.state.notesList[this.state.nowNoteIndex].favorite = !this.state.notesList[this.state.nowNoteIndex].favorite
    this.setState({
      notesList: this.state.notesList
    })
  }
  delNote () {
    this.state.notesList.splice(this.state.nowNoteIndex, 1)
    this.setState({
      notesList: this.state.notesList,
      nowNoteIndex: 0
    })
  }
  changeft (){
    this.setState ({
      favoriteNotes: this.state.notesList.filter(item => item.favorite === true)
    })
  }
  changeff (){
     this.setState ({
       favoriteNotes: this.state.notesList
    })
  }
  render () {
    return (
      <div style={appStyle.app}>
        <Toolbar addNewNote={this.addNote.bind(this)} toFavorite={this.toFavorite.bind(this)} delNote={this.delNote.bind(this)} nowNote={this.state.notesList.length > 0 ? this.state.notesList[this.state.nowNoteIndex] : { favorite: false }}/>
        <Notelist notesList={this.state.favoriteNotes} nowNoteIndex={this.state.nowNoteIndex} changeNowNote={this.changeNowNote.bind(this)} changeft = {this.changeft.bind(this)} changeff = {this.changeff.bind(this)}/>
        <Editnotes nowNote={this.state.notesList.length > 0 ? this.state.notesList[this.state.nowNoteIndex] : { title: '', content: '' }} noteEditor={this.noteEditor.bind(this)}/>
      </div>
    )
  }
}
