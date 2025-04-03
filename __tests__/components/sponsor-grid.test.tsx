import { render, screen } from "@testing-library/react";
import SponsorGrid from "@/app/components/sponsor-grid";
import "@testing-library/jest-dom";

describe("SponsorGrid Component", () => {
    it("should render the sponsor grid with the correct number of images", () => {
        const mockSponsors = [
            [
                {
                    name: "Sponsor 1",
                    image: {
                        src: "/images/sponsor1.png",
                        alt: "Sponsor 1"
                    }
                },
                {
                    name: "Sponsor 2",
                    image: {
                        src: "/images/sponsor2.png",
                        alt: "Sponsor 2"
                    }
                }
            ],
            [
                {
                    name: "Sponsor 3",
                    image: {
                        src: "/images/sponsor3.png",
                        alt: "Sponsor 3"
                    }
                },
                {
                    name: "Sponsor 4",
                    image: {
                        src: "/images/sponsor4.png",
                        alt: "Sponsor 4"
                    }
                }
            ]
        ];
        render(<SponsorGrid sponsors={mockSponsors} />);

        // Check that the correct number of sponsor images are rendered
        let sponsorCounter = 0;
        mockSponsors.forEach((row) => {
            sponsorCounter += row.length;
        });
        const sponsorImages = screen.getAllByRole("img");
        expect(sponsorImages).toHaveLength(sponsorCounter);
    });

  it("should render the heading 'Our Sponsors'", () => {
    render(<SponsorGrid sponsors={[]} />);

    const heading = screen.getByText("Our Sponsors");
    expect(heading).toBeInTheDocument();
  });

  it("should render an empty grid if no sponsors are provided", () => {
    render(<SponsorGrid sponsors={[]} />);

    const sponsorImages = screen.queryAllByRole("img");
    expect(sponsorImages).toHaveLength(0);
  });
});