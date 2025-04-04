import React from 'react';

interface SponsorGridProps {
  sponsors: Sponsor[][];
}

const SponsorGrid: React.FC<SponsorGridProps> = ({ sponsors }) => {
  return (
    <div className="text-center my-12">
      <h2 className="text-2xl font-semibold mb-8">Our Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-20 gap-y-10 justify-items-center items-center ml-8 mr-8">
        {
          sponsors.map((sponsorsRow, row) => 
            sponsorsRow.map((sponsor, index) => (
              <img key={index} src={sponsor.image.src}  alt={sponsor.image.alt} className="max-w-30 md:max-w-40 h-auto" />
            )))
        }
      </div>
    </div>
  );
};

export default SponsorGrid;
