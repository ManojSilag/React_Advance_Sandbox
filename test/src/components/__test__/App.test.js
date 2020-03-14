import React, { createElement } from "react";
import App from "components/App";
import CommentBox from "components/CommentBox";
import { shallow } from "enzyme";
import  CommentList  from "components/CommentList";

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
});

test("shows a comment box", () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App/>, div);
  // expect(div.innerHTML).toContain('Comment BOx');
  // ReactDOM.unmountComponentAtNode(div)

//   const component = shallow(<App/>);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

test("shows a comment List", () => {
    // const component = shallow(<App/>);
    expect(wrapped.find(CommentList).length).toEqual(1);
})
