"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ModalOverlayContent() {
    const searchParams = useSearchParams();
    const modal = searchParams === null ? null : searchParams.get("modal");

    return (
        <>
            {(modal === "true" || modal === null) &&
                <dialog className="fixed top-0 left-0 w-full h-full bg-transparent flex justify-center items-center z-50">
                    <div className="relative w-full h-full flex justify-center items-center bg-black bg-opacity-20">
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

export default function ModalOverlay() {
    return (
        <Suspense fallback={null}>
            <ModalOverlayContent />
        </Suspense>
    );
}