import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import ContactPage from "@/app/contact-us/page";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn().mockReturnValue(null),
  })),
}));

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

import BusinessForm from "@/app/components/contact-us/business-form";
import GeneralForm from "@/app/components/contact-us/general-form";

const mockContactUsConfig = {
    "business-form": {
        "fields": [
            {
                id: "field-1",
                label: "Field 1",
                type: "text",
                required: true
            },
            {
                id: "field-2",
                label: "Field 2",
                type: "email",
                required: true
            },
            {
                id: "field-3",
                label: "Field 3",
                type: "textarea",
                required: true
            }
        ]
    },
    "general-form": {
        "fields": [
            {
                id: "field-1",
                label: "Field 1",
                type: "text",
                required: true
            },
            {
                id: "field-2",
                label: "Field 2",
                type: "email",
                required: true
            },
            {
                id: "field-3",
                label: "Field 3",
                type: "textarea",
                required: true
            }
        ]
    },
    "background": {
        "src": "/images/example-background-images.png",
        "alt": "background"
    },
    "images": {
        "general-form": {
            "src": "/images/example-general-form.png",
            "alt": "General Inquiry"
        },
        "business-form": {
            "src": "/images/example-business-form.png",
            "alt": "Business Inquiry"
        }
    }
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () =>
        Promise.resolve({
            app: {
                pages: {
                    "contact-us": mockContactUsConfig
                }
            }
        }),
    })
) as jest.Mock;

jest.mock("@/app/components/contact-us/business-form", () => jest.fn(() => <div>Mocked BusinessForm</div>));
jest.mock("@/app/components/contact-us/general-form", () => jest.fn(() => <div>Mocked GeneralForm</div>));
jest.mock("next/image", () => jest.fn(() => <div>Mocked Image</div>));

import Image from "next/image";

describe("ContactPage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders correctly and fetches data", async () => {
        render(<ContactPage />);

        await waitFor(() => {
            expect(BusinessForm).toHaveBeenLastCalledWith(
                expect.objectContaining({
                    formConfig: mockContactUsConfig["business-form"]["fields"]
                }),
                expect.anything()
            );

            expect(GeneralForm).toHaveBeenLastCalledWith(
                expect.objectContaining({
                    formConfig: mockContactUsConfig["general-form"]["fields"]
                }),
                expect.anything()
            );
        });
    });

    it("renders images when defined", async () => {
        render(<ContactPage />);

        await waitFor(() => {
            expect(Image).toHaveBeenCalledWith(
                expect.objectContaining({
                    src: mockContactUsConfig["images"]["general-form"]["src"],
                    alt: mockContactUsConfig["images"]["general-form"]["alt"]
                }),
                {}
            );
            expect(Image).toHaveBeenCalledWith(
                expect.objectContaining({
                    src: mockContactUsConfig["images"]["business-form"]["src"],
                    alt: mockContactUsConfig["images"]["business-form"]["alt"]
                }),
                {}
            );
        });
    });

    it("does not render images when undefined", async () => {
        const mockContactUsConfigWithoutImages = {
            ...mockContactUsConfig,
            images: {}
        };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () =>
                Promise.resolve({
                    app: {
                        pages: {
                            "contact-us": mockContactUsConfigWithoutImages
                        }
                    }
                }),
            })
        ) as jest.Mock;

        render(<ContactPage />);

        await waitFor(() => {
            const generalFormImage = screen.queryByAltText("General Inquiry");
            const businessFormImage = screen.queryByAltText("Business Inquiry");

            expect(generalFormImage).toBeNull();
            expect(businessFormImage).toBeNull();
        });
    });
});
