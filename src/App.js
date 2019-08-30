import React, { Component } from "react";
import ShadowRoot from 'react-shadow-root';
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  render() {
    const shadowRootInnerHtml = () => {
      let html = '';
      html += '<style>h1 { color: green; }</style>';
      html += '<h1>This h1 should be green!</h1>';
      return html;
    };

    const setInnerHtml = (html) => {
      return { __html: html };
    };

    return (
      <div className="App">
        <h1> This h1 tag should be red! </h1>

        <div> // The shadow root will be attached to this DIV
          <ShadowRoot>
            <div dangerouslySetInnerHTML={setInnerHtml(shadowRootInnerHtml())}></div>
          </ShadowRoot>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
