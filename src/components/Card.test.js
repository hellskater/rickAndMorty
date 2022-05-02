import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Card from "./Card";

afterEach(cleanup);

const profileApi = "https://rickandmortyapi.com/api/character/1";

const data = fetch(profileApi)
  .then((res) => res.json)
  .then((res) => res.results);

it("Character card", () => {
  const history = createMemoryHistory();

  const { getByTestId } = render(
    <Router location={history.location} navigator={history}>
      <Card character={data} />
    </Router>
  );

  expect(getByTestId("card")).toHaveTextContent("Last Location");
});
