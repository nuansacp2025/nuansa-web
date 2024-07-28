"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import "./modal-overlay.css";
import Image from 'next/image'

function ModalOverlay() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");

    return (
        <>
            {(modal === "true" || modal === null) &&
                <dialog className="modal-overlay">
                    <div className="modal-background">
                        <div className="modal-content">
                        <div className="modal-text">
                            <p>Coming Soon: NUANSA 2025</p>
                            <br />
                            <Link href="?modal=false">
                                <button type="button" className="modal-button">Continue</button>
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