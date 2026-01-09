import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", ()=> {
    it("renders CTA button", () => {
        render(<Home />);

        user.click(screen.getByRole("link", {name: /more/i}));
        expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    });
});