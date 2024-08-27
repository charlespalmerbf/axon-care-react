import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import StatCard from "@/components/StatCard";

describe("StatCard", () => {
  const defaultProps = {
    count: 10,
    label: "Appointments",
    icon: "/icon.png",
    type: "appointments" as const,
  };

  it("matches snapshot", () => {
    const screen = render(<StatCard {...defaultProps} />);
    expect(screen).toMatchSnapshot();
  });

  it("renders with correct count and label", () => {
    render(<StatCard {...defaultProps} />);
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Appointments")).toBeInTheDocument();
  });

  it("renders the correct icon with alt text", () => {
    render(<StatCard {...defaultProps} />);
    const icon = screen.getByAltText("Appointments");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src");
    expect(icon.getAttribute("src")).toContain(encodeURIComponent(defaultProps.icon));
  });

  it("applies the correct background class for appointments type", () => {
    const { container } = render(<StatCard {...defaultProps} />);
    const statCard = container.getElementsByClassName("bg-appointments")[0];
    expect(statCard).toBeInTheDocument();
  });

  it("applies the correct background class for pending type", () => {
    const { container } = render(<StatCard {...defaultProps} type="pending" />);
    const statCard = container.getElementsByClassName("bg-pending")[0];
    expect(statCard).toBeInTheDocument();
  });

  it("applies the correct background class for cancelled type", () => {
    const { container } = render(<StatCard {...defaultProps} type="cancelled" />);
    const statCard = container.getElementsByClassName("bg-cancelled")[0];
    expect(statCard).toBeInTheDocument();
  });

  it("renders with default count of 0 when count prop is not provided", () => {
    render(<StatCard {...defaultProps} count={undefined as any} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
