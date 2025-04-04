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
}

interface Sponsor {
    name: string;
    image: ImageConfig;
    description?: string;
    website?: string;
}
