import Image from "next/image";
import BusinessForm from "@/app/components/contact-us/business-form";
import GeneralForm from "@/app/components/contact-us/general-form";

export default function ContactPage() {
    return (
        <div className="items-center bg-teal-950 space-y-20 px-4 md:px-12 lg:px-16 pb-12">
            <div className="sm:grid sm:grid-cols-2 text-white py-10">
                <div className="sm:place-self-center mx-auto my-auto">
                    <GeneralForm/>
                </div>
                <div className="sm:place-self-center hidden sm:block">
                    <Image src={'/images/logo/nuansa_logo.png'} alt={'logo'} width={0} height={0} sizes="100vw"
                           style={{ width: '12rem', height: 'auto' }}/>
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 bg-amber-50 rounded-md text-black bottom-8 p-10">
                <div className="sm:place-self-center hidden sm:block">
                    <Image src={'/images/logo/nuansa_logo.png'} alt={'logo'} width={0} height={0} sizes="100vw"
                           style={{width: '12rem', height: 'auto'}}/>
                </div>
                <div className="sm:place-self-center">
                    <BusinessForm/>
                </div>
            </div>
        </div>
    )
            }