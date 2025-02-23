import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactPage from "@/app/contact-us/page";
import { useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn()
}));

jest.mock("@/app/components/contact-us/business-form", () => () => <div data-testid="business-form" />);
jest.mock("@/app/components/contact-us/general-form", () => () => <div data-testid="general-form" />);
jest.mock("@/app/components/animations", () => ({
  FadeInDiv: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));
jest.mock("@/app/components/modal-overlay", () => ({ onClose }: { onClose: () => void }) => (
  <div data-testid="modal-overlay" onClick={onClose}>Success Message</div>
));
jest.mock("@/app/components/background", () => ({ ScrollableBackground: () => <div data-testid="background" /> }));


describe("ContactPage", () => {
  it("renders the contact page with forms and images", () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    render(<ContactPage />);

    expect(screen.getByTestId("background")).toBeInTheDocument();
    expect(screen.getByTestId("general-form")).toBeInTheDocument();
    expect(screen.getByTestId("business-form")).toBeInTheDocument();
  });

  it("displays success message when success parameter is true", () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams("success=true"));
    render(<ContactPage />);

    expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
  });
});
