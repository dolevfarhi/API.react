import React from "react";
import { Route } from "react-router-dom";
import BookList from "../Components/BookList";
import freeBooks from "../Components/freeBook";
import freeBookbyDate from "../Components/freeBookbydate";
import Header from "../Header"


const ReactRouter =()=>{
    return (

        <React.Fragment>
         <Header/>
            <Route exact path="/" component={BookList} />
            <Route path="/getFreeBooksByName/" component={freeBooks}/>
             <Route path="/getFreeBooksByDates/" component={freeBookbyDate}/>
        </React.Fragment>

    );}

export default ReactRouter;
