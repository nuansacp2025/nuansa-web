import { render, screen } from "@testing-library/react";
import SponsorGrid from "@/app/components/sponsor-grid";
import "@testing-library/jest-dom";

describe("SponsorGrid Component", () => {
  const mockSponsors = [
    {
      tier: "Tier 1",
      color: "Color 1",
      showdesc: true,
      companies: [
        [
          {
            name: "Sponsor 1",
            image: {
              src: "/images/sponsor1.png",
              alt: "Sponsor 1",
            },
          },
          {
            name: "Sponsor 2",
            image: {
              src: "/images/sponsor2.png",
              alt: "Sponsor 2",
            },
          },
        ],
      ],
    },
    {
      tier: "Tier 2",
      color: "Color 2",
      showdesc: false,
      companies: [
        [
          {
            name: "Sponsor 3",
            image: {
              src: "/images/sponsor3.png",
              alt: "Sponsor 3",
            },
          },
          {
            name: "Sponsor 4",
            image: {
              src: "/images/sponsor4.png",
              alt: "Sponsor 4",
            },
          },
        ],
      ],
    },
  ];

  it("should render the sponsor grid with the correct number of images", () => {
    render(<SponsorGrid sponsors={mockSponsors} />);

    // Calculate the total number of sponsor images
    const sponsorCounter = mockSponsors.reduce(
      (count, tier) => count + tier.companies.flat().length,
      0
    );

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

  it("should render sponsor tiers with the correct styles and content", () => {
    render(<SponsorGrid sponsors={mockSponsors} />);

    mockSponsors.forEach((tier) => {
      // Check that the tier heading is rendered with the correct text and style
      const tierHeading = screen.getByText(`${tier.tier} Sponsors`);
      expect(tierHeading).toBeInTheDocument();
      expect(tierHeading).toHaveStyle(`color: ${tier.color}`);
    });
  });
});