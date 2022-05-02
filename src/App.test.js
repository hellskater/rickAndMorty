import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";

import App from "./App";

afterEach(cleanup);

// Snapshot test

it("App.js taking snapshot", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  const { asFragment } = render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  expect(
    asFragment(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
  ).toMatchSnapshot();
});

// Routing test

test("App rendering/navigating", async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  expect(screen.getByText(/character list/i)).toBeInTheDocument();
});

// 404 No Page found test

test("Landing on a bad page", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
});
