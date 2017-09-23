import React, { Component } from 'react';


//*imp- in this application state we use is local to particular
// component but later in redux state become applicatin wise so
// its become application level state.

class SearchBar extends Component {
  constructor(props){ 
    super(props); //for parent

    this.state = {term : ''}; //intializinng the state, constructor is the only 
                              // where we initialize our state.
                              // we can sayt thet here we intialize which will
                              // be stored in state.  
  }
    render() {

      //every time state will change component will re-render itself.
      
      return (
        <div className="search-bar">
         <input 
         
         onChange={event => this.onInputCchange({term : event.target.value})}
          />
          
        </div>  
      );

    } 

    onInputCchange(term){

      this.setState({term});
      this.props.onSearchTermChange(term);
    }
  
    // onChangeInput(event){  //es5 syntax
    //   console.log(event.target.value)
    // }
    

    //we always manipulate our state with this.setState(some value). thid is thumb rule
}

// this approach allows to provide some default value in input in browser
//while intializing the we can set some default value insted of empty sstring.

// the key of having state is we can handle the event and set that event in our state
// event can be any type  a button, input etc...

// Note : there are two type by which we can create a component
// class based and function based, class base is useful when we have to change state.

//when a state changes they tell all its child component to re-render.
export default SearchBar;
