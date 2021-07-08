import React  from "react";
import "./App.css";
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'

class App extends React.Component {
  render() {
    return (
      <>
      <HelloWorld name='User'/>
      <Button/>
      </>
    )
  }
}

export default App;