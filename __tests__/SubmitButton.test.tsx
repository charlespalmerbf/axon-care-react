import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import SubmitButton from "@/components/SubmitButton";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("SubmitButton", () => {
  it("should render with loading state", () => {
    render(
      <SubmitButton isLoading={true}>
        <span>Submit</span>
      </SubmitButton>
    );

    expect(screen.getByAltText("loader")).toBeInTheDocument();
    expect(screen.getByText("Loading ...")).toBeInTheDocument();
    
    expect(screen.queryByText("Submit")).not.toBeInTheDocument();
  });

  it("should render without loading state", () => {
    render(
      <SubmitButton isLoading={false}>
        <span>Submit</span>
      </SubmitButton>
    );

    expect(screen.getByText("Submit")).toBeInTheDocument();
    
    expect(screen.queryByAltText("loader")).not.toBeInTheDocument();
    expect(screen.queryByText("Loading ...")).not.toBeInTheDocument();
  });

  it("should apply custom class names", () => {
    render(
      <SubmitButton isLoading={false} className="custom-class">
        <span>Submit</span>
      </SubmitButton>
    );

    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });
});
