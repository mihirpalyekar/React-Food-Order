import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../Mocks//resListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search res list for burger input", async () => {

   await act(async () =>
     render(
       <BrowserRouter>
         <Body />
       </BrowserRouter>
     )
   );
    const resCardBeforeSearch = screen.getAllByTestId("resCard");
   expect(resCardBeforeSearch.length).toBe(9)
   const searchBTN = screen.getByRole("button", {name: 'Search'});
   const searchInput = screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target: {value:'burger'}});
   fireEvent.click(searchBTN);
   const resCardAfterSearch = screen.getAllByTestId("resCard");

   //Screen should load 4 cards
   expect(resCardAfterSearch.length).toBe(1);
});

it("Should Search res list for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const resCardBeforeFilter = screen.getAllByTestId("resCard");
  expect(resCardBeforeFilter.length).toBe(9);
  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedButton);
  const resCardAfterFilter = screen.getAllByTestId("resCard");

  //Screen should load 4 cards
  expect(resCardAfterFilter.length).toBe(2);
});