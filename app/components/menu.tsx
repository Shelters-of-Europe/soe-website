'use client'

import { useState } from "react"

export default function Menu() {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    function onMenuButtonClick() {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <div>
            <nav className={(isMenuVisible ? "left-[0]" : "left-[-20%]") + " absolute h-full menuBar"}>
                <button className="menuButton pt-[10px] pl-[5px] pr-[5px] pb-[5px] relative left-[100%]"
                        onClick={() => onMenuButtonClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="3vw" height="3vhw" viewBox="0 0 50 50">
                        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
                    </svg>
                </button>
            </nav>
        </div>
    )
}