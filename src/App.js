import '@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf';
import React, { Component } from "react";
import ShadowRoot from 'react-shadow-root';
import juice from 'juice';
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  render() {
    const shadowRootInnerHtml = () => {
      let html = '';
      html += '<style>h1.test1 { color: green; } h2.test2 { color: cyan; } h3 { color: violet; }</style>';
      html += '<h1 class="test1">This h1 should be green!</h1>';
      html += '<h2 class="test1">This h2 should be black (doesnt get outer styles)!</h2>';
      html += '<h2 class="test2">This h2 should be cyan!</h2>';
      html += '<h3>h3 should be violet</h3>';
      html += '<h4>h4 should be black</h3>';
      html += '<h5>h5 should be black</h5>';
      return html;
    };

    const shadowRootInnerHtml2 = () => {
      let html = '';
      html += '<style>h1.test1 { color: green; } h2.test2 { color: cyan; } h3 { color: violet; } h4 { color: tomato; } </style>';
      html += '<h1 class="test1">This h1 should be green!</h1>';
      html += '<h2 class="test1">This h2 should be black (doesnt get outer styles)!</h2>';
      html += '<h2 class="test2">This h2 should be cyan!</h2>';
      html += '<h3>h3 should be violet</h3>';
      html += '<h4>h4 should be tomato</h3>';
      html += '<h5>h5 should be black</h5>';
      return html;
    };

    const inlineCss = (html) => {
      return juice(html)
    };

    const setInnerHtml = (html) => {
      return { __html: html };
    };

    return (
      <div className="App">
        <h1 className="test1"> This h1 tag should be red! </h1>
        <h2 className="test1"> This h2 tag should be blue (main page style)! </h2>
        <h3>h3 without class</h3>
        <h4>h4 without class</h4>
        <h5>h5 without class should be brown</h5>
        <hr />

        {/* <response-card> // The shadow root will be attached to this DIV
          <ShadowRoot>
            <div dangerouslySetInnerHTML={setInnerHtml(shadowRootInnerHtml())}></div>
          </ShadowRoot>
        </response-card>

        <hr /> */}

        <h3><u>Inline css:</u></h3>

        <response-card2> // The shadow root will be attached to this DIV
          <ShadowRoot>
            <div dangerouslySetInnerHTML={setInnerHtml(inlineCss(shadowRootInnerHtml2()))}></div>
          </ShadowRoot>
        </response-card2>
      </div>
    );
  }
}

export default hot(module)(App);
