import React from 'react';

interface SponsorGridProps {
  sponsors: SponsorTier[];
}

const SponsorGrid: React.FC<SponsorGridProps> = ({ sponsors }) => {
  return (
    <div className="text-center my-12">
      <h2 className="text-3xl font-semibold mb-8">Our Sponsors</h2>
      <div className="bg-white bg-opacity-80 rounded-lg p-8">
        {
          sponsors.map((sponsorTier) => (
            <section key={sponsorTier.tier} data-testid={sponsorTier.tier} className="my-12">
              {
                sponsorTier.companies.map(companyRow => (
                  <div key={companyRow[0].name} className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
                    {companyRow.map((sponsor) => (
                      <div
                        key={sponsor.name}
                        className="flex items-center justify-center p-4"
                      >
                        <img
                          src={sponsor.image.src}
                          alt={sponsor.image.alt}
                          style={{ maxHeight: sponsor.maxheight }}
                          className={`transition-transform duration-200 hover:scale-105`}
                        />
                      </div>
                    ))}
                  </div>
                ))
              }
            </section>
          ))
        }
      </div>
    </div>
  );
};

export default SponsorGrid;
