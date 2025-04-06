interface ImageConfig {
    src: string;
    alt: string;
    description?: string;
}

interface CastMember {
    name: string;
    character: string;
    image: ImageConfig;
    description?: string;
    size?: {
        width?: string,
        height?: string;
        colSpan?: number;
        rowSpan?: number;
    };
}

interface Sponsor {
    name: string;
    image: ImageConfig;
    description?: string;
    website?: string;
}

interface SponsorTier {
    tier: string;
    color: string;
    showdesc: boolean;
    companies: Sponsor[][];
}