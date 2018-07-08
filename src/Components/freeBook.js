import React, {Component} from 'react'
import Book from './Book'
// import data from '../data/data'
import MdAdd from 'react-icons/lib/md/add'


class freeBooks extends Component {
  constructor(props) {
    super(props);
      this.state = {
      startDate :"",
      lastDate :"",
      bookName:"",
      author :""
    }
    this.state = {
       startDate : "",
          lastDate  : "",
          bookName  : "",
          author    : ""
    }
  }

componentWillMount() {
    const url = " https://freebooksws.herokuapp.com/getFreeBooksByName ";
    fetch(url,{
        method: 'post',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: "book_name=White Fang"
      }).then((res) => { return res.json() }).then((data) => {
         console.log(data)
           this.setState({
          startDate : data[0].freeByMonths.startDate,
          lastDate  : data[0].freeByMonths.lastDate,
          bookName  : data[0].bookName,
          author    : data[0].author
        })

    });
  }

  render() {
      return (
       <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
           <h5 className="card-title">{this.state.bookName}</h5>
            <p  className="card-title">{this.state.startDate}</p>
            <p  className="card-text">{this.state.lastDate}</p>
            <p  className="card-text">{this.state.author}</p>
             </div>
      </div>
      )
  }
}
export default freeBooks;
