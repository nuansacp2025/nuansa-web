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
    return (
        <div className="items-center px-4 md:px-12 lg:px-16 pb-12">
            <Suspense>
                <SuccessMessage/>
            </Suspense>
            <ScrollableBackground src={'/images/contact-us/background.png'} height={1920} width={1080} />
            <FadeInDiv id="general-form" className="sm:grid sm:grid-cols-2 text-white p-10">
                <div className="sm:place-self-center mx-auto my-auto">
                    <GeneralForm/>
                </div>
                <div className="sm:place-self-center hidden sm:block">
                    <Image src={'/images/contact-us/general_inquiry.png'} alt={'logo'} width={0} height={0} sizes="100vw"
                           style={{ width: '12rem', height: 'auto' }}/>
                </div>
            </FadeInDiv>
            <FadeInDiv id="business-form" className="sm:grid sm:grid-cols-2 bg-orange-a rounded-md text-black bottom-8 p-10" style={{ scrollMarginTop: '80px' }}>
                <div className="sm:place-self-center hidden sm:block">
                    <Image src={'/images/contact-us/business_inquiry.png'} alt={'logo'} width={0} height={0} sizes="100vw"
                           style={{width: '12rem', height: 'auto'}}/>
                </div>
                <div className="sm:place-self-center">
                    <BusinessForm/>
                </div>
            </FadeInDiv>
        </div>
    )
}