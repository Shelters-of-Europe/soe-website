'use client'

import { useState } from "react"

export default function Menu() {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    function onMenuButtonClick() {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <div>
            <nav className={(isMenuVisible ? "left-[0]" : "sm:left-[-20%] left-[-70%]") + " fixed top-0 sm:w-[20%] menuBar bg-[var(--themeSecondary)] h-[100%] z-30"}>
                <button className="menuButton hover:bg-zinc-600 bg-[var(--themeSecondary)] pt-[10px] pl-[10px] pr-[10px] pb-[10px] absolute right-0 z-40"
                        onClick={() => onMenuButtonClick()}>
                    <svg className="md:w-[3vw] md:h-[3vw] sm:w-[7vw] sm:h-[7vw] w-[10vw] h-[10vw]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
                    </svg>
                </button>
            </nav>
            <button className={"menuButton hover:bg-zinc-600 bg-[var(--background-start-rgb)] pt-[10px] pl-[10px] pr-[10px] pb-[10px] absolute top-0 z-40 " + (isMenuVisible ? "left-[-20%]" : "left-0")}
                    onClick={() => onMenuButtonClick()}>
                <svg className="md:w-[3vw] md:h-[3vw] sm:w-[7vw] sm:h-[7vw] w-[10vw] h-[10vw]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
                </svg>
            </button>
        </div>
        
    )
}