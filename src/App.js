import React, { Component } from "react";
import TodoList from "./components/TodoList";
import SearchBox from "./components/SearchBox";
import AddTodo from "./components/AddTodo";
import NavBar from "./components/Navbar";
import FilterBy from "./components/FilterBy";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [],
      searchField: "",
      AddInput: "",
      filterBy: "all"
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  onAddInputChange = event => {
    this.setState({ AddInput: event.target.value });
  };

  onChecked = id => {
    let updateTodoItem = this.state.todoItems.map(todoItem => {
      if (id === todoItem.id) todoItem.status = !todoItem.status;
      return todoItem;
    });
    this.setState(prevState => ({
      todoItem: prevState.todoItems.concat(updateTodoItem)
    }));
  };

  onAddClick = event => {
    event.preventDefault();

    if (this.state.AddInput === "") {
      return;
    }
    let newTodoItem = {
      id: Date.now(),
      text: this.state.AddInput,
      status: true
    };

    this.setState(prevState => ({
      todoItems: prevState.todoItems.concat(newTodoItem),
      AddInput: ""
    }));
  };

  onDeleteButtonClick = id => {
    let updateTodoItem = this.state.todoItems.filter(todoItem => {
      return id !== todoItem.id;
    });
    this.setState({
      todoItems: [].concat(updateTodoItem)
    });
  };

  onRadioButtonChange = event => {
    let filterBy = "";
    switch (event.target.name) {
      case "unchecked":
        filterBy = "unchecked";
        break;
      case "archived":
        filterBy = "archived";
        break;
      default:
        filterBy = "all";
    }
    this.setState({
      filterBy: filterBy
    });
  };

  render() {
    const { todoItems, searchField, filterBy } = this.state;
    const filteredTodo = todoItems.filter(todoItem => {
      if (filterBy === "archived")
        return (
          todoItem.text.toLowerCase().includes(searchField.toLowerCase()) &&
          todoItem.status === false
        );
      else if (filterBy === "unchecked")
        return (
          todoItem.text.toLowerCase().includes(searchField.toLowerCase()) &&
          todoItem.status === true
        );
      else
        return todoItem.text.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <React.Fragment>
        <NavBar />
        <div className="container mt-5">
          <div className="jumbotron border border-secondary">
            <h1 className="">Your Personal Todo App &#9787;</h1>
            <hr className="my-4" />
            <br />
            <AddTodo
              AddInput={this.state.AddInput}
              onAddInputChange={this.onAddInputChange}
              onAddClick={this.onAddClick}
            />
            <hr className="my-4" />
            <SearchBox onSearchChange={this.onSearchChange} />
            <hr className="my-4" />
            <FilterBy
              onRadioButtonChange={this.onRadioButtonChange}
              filterBy={this.state.filterBy}
            />
            <hr className="my-4" />
            <br />
            {this.state.todoItems.length === 0 ? (
              <div>Dude, add some todos enji! &#9785;</div>
            ) : (
              <TodoList
                todoItems={filteredTodo}
                onChecked={this.onChecked}
                onDeleteButtonClick={this.onDeleteButtonClick}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
