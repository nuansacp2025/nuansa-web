"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';

function ModalOverlay() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");

    return (
        <>
            {(modal === "true" || modal === null) &&
                <dialog className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative w-full h-full flex justify-center items-center bg-black bg-opacity-80">
                        <Image 
                            src="/post-nuansa-2024.jpg" 
                            alt="Background" 
                            fill
                            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                        />
                        <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full text-center animate-slide-up">
                            <div className="text-lg text-[#bd9527] leading-6 font-myriad">
                                <p>Coming Soon: NUANSA 2025</p>
                                <br />
                                <Link href="?modal=false">
                                    <button type="button" className="bg-[#fecd94] text-white border-none py-2 px-4 rounded cursor-pointer text-base hover:bg-[#0056b3]">
                                        Continue
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default ModalOverlay;