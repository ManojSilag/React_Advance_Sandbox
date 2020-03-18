import React from "react";
import Root from "Root";
import { mount } from "enzyme";
import CommentList from "../CommentList";

let wrapper;
beforeEach(() => {
  const initialState = {
    commentList: ["comment1", "comment2"]
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
    // console.log(wrapper.text())
    // console.log(wrapper.render().text())
    expect(wrapper.render().text()).toContain('comment1');
    expect(wrapper.render().text()).toContain('comment2');

});
