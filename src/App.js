import React, { Component, Fragment } from "react";
import "./App.css";

const Tab1 = () => <h1>Текст 1 кнопки</h1>;

const Tab2 = () => <h1>Текст 2 кнопки</h1>;

const Tab3 = () => <h1>Текст 3 кнопки</h1>;
class App extends Component {
  state = {
    activeTab: 1,
  };

  handleTab = (e) => {
    this.setState({ activeTab: +e.target.getAttribute("data-name") });
  };

  render() {
    const { activeTab } = this.state;
    return (
      ///// {activeTab===1 && <Tab1/>}
      //{activeTab===2 && <Tab2/>}
      //{activeTab===3 && <Tab3/>}
      <Fragment>
        <button data-name={1} onClick={this.handleTab}>
          Tab 1
        </button>
        <button data-name={2} onClick={this.handleTab}>
          Tab 2
        </button>
        <button data-name={3} onClick={this.handleTab}>
          Tab 3
        </button>

        {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
        <div>{`активная кнопка ${
          activeTab === 1 ? "первая" : activeTab === 2 ? "вторая" : "третья"
        }`}</div>
      </Fragment>
    );
  }
}
export default App;
