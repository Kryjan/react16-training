import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow, mount, render } from "enzyme";

describe("renders without crashing", () => {
  it("when default approach used", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("when enzyme", () => {
    it("shallow used", () => {
      shallow(<App />);
    });

    it("mount used", () => {
      mount(<App />);
    });
  });

  describe("when enzyme snapshots taken with", () => {
    it("shallow", () => {
      expect(shallow(<App />)).toMatchSnapshot();
    });

    it("mount", () => {
      expect(mount(<App />)).toMatchSnapshot();
    });

    it("render", () => {
      expect(render(<App />)).toMatchSnapshot();
    });
  });
});

describe("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Welcome to React</h1>;

  it('checked with plain enzyme', () => {
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('checked with jest-enzyme', () => {
    expect(wrapper).toContainReact(welcome);
  });
});
