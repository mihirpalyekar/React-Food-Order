import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../Mocks/resMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { execPath } from "process";
import { BrowserRouter } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should load restuarant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (10)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(10);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(12);
    fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}))
    expect(screen.getByText("Go to Home"));
  expect(screen.getAllByTestId("foodItems").length).toBe(10);
});
