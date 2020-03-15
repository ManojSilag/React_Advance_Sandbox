import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that user can type in", () => {
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new Comment" } });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new Comment");
});

it("when form is submitted, text area gets emptied", () => {
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new Comment" } });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new Comment");
  wrapped.find("form").simulate("submit");
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
