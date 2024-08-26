import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StatCard from "../components/StatCard";

describe("StatCard", () => {
  it("should render with appointments type", () => {
    render(
      <StatCard
        type="appointments"
        count={10}
        label="Appointments"
        icon="/icons/appointments.svg"
      />,
    );

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Appointments")).toBeInTheDocument();
    expect(screen.getByAltText("Appointments")).toBeInTheDocument();
    expect(screen.getByText("Appointments").closest("div")).toHaveClass(
      "bg-appointments",
    );
  });

  it("should render with pending type", () => {
    render(
      <StatCard
        type="pending"
        count={5}
        label="Pending"
        icon="/icons/pending.svg"
      />,
    );

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
    expect(screen.getByAltText("Pending")).toBeInTheDocument();
    expect(screen.getByText("Pending").closest("div")).toHaveClass(
      "bg-pending",
    );
  });

  it("should render with cancelled type", () => {
    render(
      <StatCard
        type="cancelled"
        count={3}
        label="Cancelled"
        icon="/icons/cancelled.svg"
      />,
    );

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Cancelled")).toBeInTheDocument();
    expect(screen.getByAltText("Cancelled")).toBeInTheDocument();
    expect(screen.getByText("Cancelled").closest("div")).toHaveClass(
      "bg-cancelled",
    );
  });
});
