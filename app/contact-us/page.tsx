"use client"

import Image from "next/image";
import BusinessForm from "@/app/components/contact-us/business-form";
import GeneralForm from "@/app/components/contact-us/general-form";
import { FadeInDiv } from "../components/animations";
import { ScrollableBackground } from "../components/background";

export default function ContactPage() {
    return (
        <div className="items-center space-y-20 px-4 md:px-12 lg:px-16 pb-12">
            <ScrollableBackground src={'/images/contact-us/background.png'} height={1920} width={1080} />
            <FadeInDiv className="sm:grid sm:grid-cols-2 text-white py-10">
                <div className="sm:place-self-center mx-auto my-auto">
                    <GeneralForm/>
                </div>
                <div className="sm:place-self-center hidden sm:block">
                    <Image src={'/images/contact-us/general_inquiry.png'} alt={'logo'} width={0} height={0} sizes="100vw"
                           style={{ width: '12rem', height: 'auto' }}/>
                </div>
            </FadeInDiv>
            <FadeInDiv className="sm:grid sm:grid-cols-2 bg-orange-a rounded-md text-black bottom-8 p-10">
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