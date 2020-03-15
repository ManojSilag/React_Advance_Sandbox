import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

//-------------------------------------------------------//
it("has a textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  //-------------------------------------------------------//

  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "new Comment" } });
    wrapped.update();
  });

  it("has a text area that user can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new Comment");
  });

  //-------------------------------------------------------//
  it("when form is submitted, text area gets emptied", () => {
    //   expect(wrapped.find("textarea").prop("value")).toEqual("new Comment");
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
