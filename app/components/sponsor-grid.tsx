import React from 'react';

interface SponsorGridProps {
  sponsors: SponsorTier[];
}

const SponsorGrid: React.FC<SponsorGridProps> = ({ sponsors }) => {
  return (
    <div className="text-center my-12">
      <h2 className="text-2xl font-semibold mb-8">Our Sponsors</h2>
      {
        sponsors.map((sponsorTier) => (
          <section key={sponsorTier.tier} className="my-12">
            <h2
              style={{ color: sponsorTier.color }}
              className="text-2xl font-bold text-center mb-6"
            >
              {sponsorTier.tier} Sponsors
            </h2>
            {
              sponsorTier.companies.map(companyRow => (
                <div key={companyRow[0].name} className={`grid grid-cols-${companyRow.length} gap-8`}>
                  {companyRow.map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="flex items-center justify-center p-4"
                    >
                      <img
                        src={sponsor.image.src}
                        alt={sponsor.image.alt}
                        className="max-w-[150px] transition-transform duration-200 hover:scale-105"
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
  );
};

export default SponsorGrid;
