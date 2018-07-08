import React, {Component} from 'react'
import Book from './Book'
// import data from '../data/data'
import MdAdd from 'react-icons/lib/md/add'


class freeBookbyDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
      ]
    }
    this.eachBook   = this.eachBook.bind(this);
    this.add        = this.add.bind(this)
    this.nextID     = this.nextID.bind(this)
  }

  add(data) {
    this.setState(prevState => ({
      books: [
      ...prevState.books,
      {
          id: this.nextID(),
          startDate : data.freeByMonths.startDate,
          lastDate  : data.freeByMonths.lastDate,
          bookName  : data.bookName,
          author    : data.author

      }]
    }))
  }
  nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }


componentWillMount() {
    const url = " https://freebooksws.herokuapp.com/getFreeBooksByDates  ";
    fetch(url,{
        method: 'post',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: "startDate=April&lastDate=May"
      }).then((res) => { return res.json() }).then((data) => {
         console.log(data)
         var self=this;
        data.map((data) => {
        console.log('book')
        self.add(data);
      });
    });
  }


  eachBook (book,i) {
    return (          
      <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
            <h5 className="card-title">{book.bookName}</h5>
            <p  className="card-title">{book.startDate}</p>
            <p  className="card-text">{book.lastDate}</p>
            <p  className="card-text">{book.author}</p>
        </div>
      </div>
      )
  }

  render() {
      return (
        <div className="BookList">
          {this.state.books.map(this.eachBook)}
          <button id="add" className="btn btn-primary" style={{marginTop:7+'px'}}>
             <MdAdd/></button>
        </div>
      )
  }
}
export default freeBookbyDate;
