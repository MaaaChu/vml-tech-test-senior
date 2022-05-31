import React from "react";
import "@testing-library/jest-dom";
import { render, RenderResult } from "@testing-library/react";
import Badge from "./Badge";

describe("components:Badge", () => {
  let wrapper: RenderResult;
  let text: string;

  beforeEach(async () => {
    text = "test";
    wrapper = render(<Badge type="primary">{text}</Badge>);
  });

  it("should match snapshot", () => {
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it("should render badge text", () => {
    const linkElement = wrapper.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
  });
});
