import React from "react";
import { render } from "@testing-library/react";
import PlayButton from "./PlayButton";

describe("components:PlayButton", () => {
  it("should match snapshot with string children", () => {
    const wrapper = render(
      <PlayButton type="primary" isBtnDisabled={false} btnOnClick={() => null}>
        Play
      </PlayButton>
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it("should match snapshot when play button is disabled", () => {
    const wrapper = render(
      <PlayButton type="primary" isBtnDisabled={true} btnOnClick={() => null}>
        Play
      </PlayButton>
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it("should match snapshot when play button is primary", () => {
    const wrapper = render(
      <PlayButton type="primary" isBtnDisabled={true} btnOnClick={() => null}>
        Play
      </PlayButton>
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it("should match snapshot when play button is secondary", () => {
    const wrapper = render(
      <PlayButton type="secondary" isBtnDisabled={true} btnOnClick={() => null}>
        Play
      </PlayButton>
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it("should match snapshot when play button type isnt given", () => {
    const wrapper = render(
      <PlayButton isBtnDisabled={true} btnOnClick={() => null}>
        Play
      </PlayButton>
    );

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
