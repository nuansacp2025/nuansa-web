"use client"

import Image from "next/image";
import BusinessForm from "@/app/components/contact-us/business-form";
import GeneralForm from "@/app/components/contact-us/general-form";
import { FadeInDiv } from "../components/animations";
import ModalOverlay from "../components/modal-overlay";
import { ScrollableBackground } from "../components/background";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessMessage() {
    const searchParams = useSearchParams();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        setShowSuccessMessage(searchParams.get("success") === "true");
      }, [searchParams]);
    return (
        <>
            {showSuccessMessage && <ModalOverlay onClose={() => setShowSuccessMessage(false)}>
                <div className="text-xl mb-8 text-gray-900">
                    <p>Sent Successfully!</p>
                </div>
            </ModalOverlay>}
        </>
    );
}

export default function ContactPage() {
    const [businessFormConfig, setBusinessFormConfig] = useState([]);
    const [generalFormConfig, setGeneralFormConfig] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState<ImageConfig>({ src: '', alt: '' });
    const [images, setImages] = useState<{ [key: string]: ImageConfig }>({});

    useEffect(() => {
        fetch('/config.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch config.json');
                }
                return response.json();
            })
            .then((configData) => {
                const businessFormFields = configData?.app?.pages?.['contact-us']?.['business-form']?.fields;
                const generalFormFields = configData?.app?.pages?.['contact-us']?.['general-form']?.fields;
                const background = configData?.app?.pages?.['contact-us']?.background;
                const images = configData?.app?.pages?.['contact-us']?.images;
                if (businessFormFields) {
                    setBusinessFormConfig(businessFormFields);
                }
                if (generalFormFields) {
                    setGeneralFormConfig(generalFormFields);
                }
                if (background) {
                    setBackgroundImage(background);
                }
                if (images) {
                    setImages(images);
                }
            });
    }, []);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const elementId = hash.substring(1); // Remove the '#' from the hash
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [businessFormConfig, generalFormConfig]);

    return (
        <div className="items-center px-4 md:px-12 lg:px-16 pb-12">
            <Suspense>
                <SuccessMessage/>
            </Suspense>
            <ScrollableBackground src={backgroundImage.src} height={1920} width={1080} />
            <FadeInDiv id="general-form" className="sm:grid sm:grid-cols-2 text-white p-10">
                <div className="sm:place-self-center mx-auto my-auto">
                    <GeneralForm formConfig={generalFormConfig} />
                </div>
                <div className="sm:place-self-center hidden sm:block">
                    {images['general-form'] != undefined && <Image src={images['general-form'].src} alt={images['general-form'].alt} width={0} height={0} sizes="100vw"
                           style={{ width: '12rem', height: 'auto' }}/>}
                </div>
            </FadeInDiv>
            <FadeInDiv id="business-form" className="sm:grid sm:grid-cols-2 bg-orange-a rounded-md text-black bottom-8 p-10" style={{ scrollMarginTop: '80px' }}>
                <div className="sm:place-self-center hidden sm:block">
                    {images['business-form'] != undefined && <Image src={images['business-form'].src} alt={images['business-form'].alt} width={0} height={0} sizes="100vw"
                           style={{width: '12rem', height: 'auto'}}/>}
                </div>
                <div className="sm:place-self-center">
                    <BusinessForm formConfig={businessFormConfig} />
                </div>
            </FadeInDiv>
        </div>
    )
}
