'use client'
import React from 'react'
import { useState } from 'react'

export default function Sidebar() {
    //state true = active; state false = inactive
    const [state, setState] = useState(true)

    function handleState() {
        setState(!state)
    }

    return (
        state
            ?
            <section className="bg-[#282828] w-60 h-screen max-h-screen">
                <div className="flex flex-col gap-4 sidebar p-4">
                    <div className="flex flex-row justify-between secondary-text-color">
                        <button onClick={handleState}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_244_13382)">
                                    <path d="M23.1429 0.857117L0.857178 23.1428" stroke="#A4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M0.857178 0.857117L23.1429 23.1428" stroke="#A4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_244_13382">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_244_13386)">
                                    <path d="M16 9.14288V22.8572" stroke="#A4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.14282 16H22.8571" stroke="#A4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M24 1.14288H7.99997C4.21288 1.14288 1.14282 4.21294 1.14282 8.00003V24C1.14282 27.7872 4.21288 30.8572 7.99997 30.8572H24C27.7872 30.8572 30.8571 27.7872 30.8571 24V8.00003C30.8571 4.21294 27.7872 1.14288 24 1.14288Z" stroke="#A4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_244_13386">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>

                    <div className="mt-10"></div>

                    <h6 className="text-sm secondary-text-color">Old Chats</h6>
                    <h3 className="text-md">Math Problem</h3>
                    <h3 className="text-md">Help with Physics</h3>
                    <h3 className="text-md">Programming Help</h3>
                </div>
            </section>
            :
            <section className="sidebar max-w-10 h-screen max-h-screen">
                <div className="flex flex-col gap-4 sidebar p-4">
                    <div className="flex flex-row justify-between secondary-text-color">
                        <button onClick={handleState}>&gt;</button>
                    </div>
                </div>
            </section>
    )
}