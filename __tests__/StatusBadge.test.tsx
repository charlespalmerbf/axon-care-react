import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for the matchers like toBeInTheDocument
import { StatusBadge } from "../components/StatusBadge"; // Adjust the import path if necessary

describe("StatusBadge", () => {
  it("should render with scheduled status", () => {
    render(<StatusBadge status="scheduled" />);

    // Check if the status text is rendered correctly
    expect(screen.getByText("scheduled")).toBeInTheDocument();
    // Check if the image is rendered correctly
    expect(screen.getByAltText("doctor")).toBeInTheDocument();
    // Check if the background class is applied
    expect(screen.getByText("scheduled").closest("div")).toHaveClass(
      "bg-green-600",
    );
    // Check if the text color class is applied
    expect(screen.getByText("scheduled")).toHaveClass("text-green-500");
  });

  it("should render with pending status", () => {
    render(<StatusBadge status="pending" />);

    expect(screen.getByText("pending")).toBeInTheDocument();
    expect(screen.getByAltText("doctor")).toBeInTheDocument();
    expect(screen.getByText("pending").closest("div")).toHaveClass(
      "bg-blue-600",
    );
    expect(screen.getByText("pending")).toHaveClass("text-blue-500");
  });

  it("should render with cancelled status", () => {
    render(<StatusBadge status="cancelled" />);

    expect(screen.getByText("cancelled")).toBeInTheDocument();
    expect(screen.getByAltText("doctor")).toBeInTheDocument();
    expect(screen.getByText("cancelled").closest("div")).toHaveClass(
      "bg-red-600",
    );
    expect(screen.getByText("cancelled")).toHaveClass("text-red-500");
  });
});
