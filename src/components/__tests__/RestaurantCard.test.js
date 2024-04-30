import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import RestaurantCard, { withPromotedLabel } from "../restaurantCard";
import MOCK_DATA from "./../Mocks/resCardMock.json";
describe("Restaurant Card test cases", () => {
  it("Should Render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
  });

  it("Should Render RestaurantCard component with is promoted label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA} />);
    const name = screen.getByText("Promoted");
    expect(name).toBeInTheDocument();
  });
});
