import { render, screen } from "@testing-library/react";
import Header from "./Header"

describe("Header", ()=> {
    it("renders navigation links", () => {
        render(<Header />);

        expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
    });
});