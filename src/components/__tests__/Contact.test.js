import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import {toBeInTheDocument} from "@testing-library/jest-dom"


describe("Contact Us Page Test Case", () => {
    it("Should load contact us component", () => {
      render(<Contact />);
      const heading = screen.getByRole("heading");
      //Assertion
      expect(heading).toBeInTheDocument();
    });

    it("Should load button inside contact us component", () => {
      render(<Contact />);
      const button = screen.getByRole("button");
      //Assertion
      expect(button).toBeInTheDocument();
    });

    it("Should load Input name inside contact us component", () => {
      render(<Contact />);
      const button = screen.getByPlaceholderText("name");
      //Assertion
      expect(button).toBeInTheDocument();
    });

    it("Should load 2 input boxes inside contact us component", () => {
      render(<Contact />);
      const inputBoxed = screen.getAllByRole("textbox");
      //Assertion
      expect(inputBoxed.length).toBe(2);
    });
})


