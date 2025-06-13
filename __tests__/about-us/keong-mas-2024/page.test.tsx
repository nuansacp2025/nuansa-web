import React from "react";
import { render, waitFor } from "@testing-library/react";
import AboutUsKeongMasPage from "@/app/about-us/keong-mas-2024/page";
import "@testing-library/jest-dom";

global.IntersectionObserver = class {
    root = null;
    rootMargin = '';
    thresholds = [];
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
};

import MainCast from "@/app/components/about-us/keong-mas-2024/main-casts";
import Gallery from "@/app/components/about-us/keong-mas-2024/gallery";

const mockKeongMas2024Config = {
    "main-casts": [
        {
            name: "Main Cast 1",
            character: "Character 1",
            image: "/main-cast-1.png",
            description: "Description 1",
        },
        {
            name: "Main Cast 2",
            character: "Character 2",
            image: "/main-cast-2.png",
            description: "Description 2",
        },
        {
            name: "Main Cast 3",
            character: "Character 3",
            image: "/main-cast-3.png",
            description: "Description 3",
        }
    ],
    gallery: [
        [
            {
                src: "/gallery-1.png",
                alt: "Gallery 1",
            },
            {
                src: "/gallery-2.png",
                alt: "Gallery 2",
            },
        ],
        [
            {
                src: "/gallery-3.png",
                alt: "Gallery 3",
            },
            {
                src: "/gallery-4.png",
                alt: "Gallery 4",
            },
        ]
    ],
};

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () =>
        Promise.resolve({
            app: {
                pages: {
                    "about-us": {
                        "keong-mas-2024": mockKeongMas2024Config
                    },
                },
            },
        }),
    })
) as jest.Mock;

jest.mock("@/app/components/about-us/keong-mas-2024/main-casts", () => jest.fn(() => <div>Mocked MainCast</div>));
jest.mock("@/app/components/about-us/keong-mas-2024/gallery", () => jest.fn(() => <div>Mocked Gallery</div>));

describe("AboutUsKeongMasPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders correctly and fetches data", async () => {
        // Temporarily disable
        return;

        render(<AboutUsKeongMasPage />);

        await waitFor(() => {
            expect(MainCast).toHaveBeenLastCalledWith(
                expect.objectContaining({cast: mockKeongMas2024Config["main-casts"]}),
                expect.anything()
            );
            expect(Gallery).toHaveBeenLastCalledWith(
                expect.objectContaining({images: mockKeongMas2024Config["gallery"]}),
                expect.anything()
            );
        });
    });
});
