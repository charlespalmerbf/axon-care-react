import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { StatusBadge } from "@/components/StatusBadge";

describe("StatusBadge Component", () => {
  it("matches snapshot", () => {
    const screen = render(<StatusBadge status="scheduled" />);
    expect(screen).toMatchSnapshot();
  });

  it("renders with 'scheduled' status", () => {
    render(<StatusBadge status="scheduled" />);
    
    const badge = screen.getByText("scheduled");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("text-green-500");

    const badgeContainer = badge.closest("div");
    expect(badgeContainer).toHaveClass("bg-green-600");

    const icon = screen.getByAltText("doctor");
    expect(icon).toHaveAttribute("src", expect.stringContaining("/assets/icons/check.svg"));
  });

  it("renders with 'pending' status", () => {
    render(<StatusBadge status="pending" />);
    
    const badge = screen.getByText("pending");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("text-blue-500");

    const badgeContainer = badge.closest("div");
    expect(badgeContainer).toHaveClass("bg-blue-600");

    const icon = screen.getByAltText("doctor");
    expect(icon).toHaveAttribute("src", expect.stringContaining("/assets/icons/pending.svg"));
  });

  it("renders with 'cancelled' status", () => {
    render(<StatusBadge status="cancelled" />);
    
    const badge = screen.getByText("cancelled");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("text-red-500");

    const badgeContainer = badge.closest("div");
    expect(badgeContainer).toHaveClass("bg-red-600");

    const icon = screen.getByAltText("doctor");
    expect(icon).toHaveAttribute("src", expect.stringContaining("/assets/icons/cancelled.svg"));
  });
});
