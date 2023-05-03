/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { SlideOverContentHeader } from "./header";

describe("Header", () => {
  it("exists", () => {
    expect(SlideOverContentHeader).toBeDefined();
  });

  it("should have reset button", () => {
    const { getByTestId } = render(
      <SlideOverContentHeader
        title="Set Parameters"
        subtitle="9 parameters available"
        handleClick={jest.fn}
        handleReset={jest.fn}
      />
    );

    getByTestId('reset-btn-data').childNodes.forEach((value) => {
      expect(value.textContent).toEqual("Reset all");
    })
  });

  it("should have cancel button", () => {
    const { getByTestId } = render(
      <SlideOverContentHeader
        title="Set Parameters"
        subtitle="9 parameters available"
        handleClick={jest.fn}
        handleReset={jest.fn}
      />
    );

    getByTestId('cancel-btn-data').childNodes.forEach((value) => {
      expect(value.firstChild).toBeDefined();
    })
  });
});
