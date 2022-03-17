import { useViewportScroll } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    FaEnvelope,
    FaFileAlt,
    FaProjectDiagram,
    FaSitemap,
    FaUser,
} from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const nav = [
    { id: 'about', name: 'About', icon: <FaUser /> },
    { id: 'skills', name: 'Skills', icon: <FaSitemap /> },
    { id: 'projects', name: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', name: 'Contact', icon: <FaEnvelope /> },
]

export default function HomeNavigation() {
    const [colorChange, setColorchange] = useState(false)
    const { scrollYProgress } = useViewportScroll()

    useEffect(() => {
        scrollYProgress.onChange(() => {
            if (scrollY >= window.screen.availHeight * 0.8) {
                setColorchange(true)
            } else {
                setColorchange(false)
            }
        })
    })

    return (
        <nav
            className={`fixed top-0 z-50 w-screen overflow-hidden transition-colors ${
                colorChange ? 'dark:bg-dark bg-white' : 'bg-transparent'
            }`}>
            <div className="tablet:w-4xl mx-auto flex max-w-[95%] flex-row justify-between">
                <ScrollLink
                    to="top"
                    className={`m-2 items-center p-2 text-2xl ${
                        colorChange
                            ? 'text-black dark:text-white'
                            : 'text-white'
                    }`}>
                    Tobias Wild
                </ScrollLink>
                <div className="flex flex-row">
                    {nav.map((card, index) => (
                        <ScrollLink
                            activeClass="active"
                            spy={true}
                            key={index}
                            to={card.id}
                            offset={-100}
                            className={`m-2 flex h-10 w-auto max-w-sm items-center rounded p-2 ${
                                colorChange
                                    ? 'text-black dark:text-white'
                                    : 'text-white '
                            } ${card.id}`}>
                            <span className="tablet:hidden text-lg">
                                {card.icon}
                            </span>
                            <span className="tablet:block hidden">
                                {card.name}
                            </span>
                        </ScrollLink>
                    ))}
                    <Link href="/blog">
                        <a className="bg-dark dark:bg-darker m-2 flex h-10 w-auto max-w-sm items-center rounded p-2 text-blue-500">
                            <span className="tablet:hidden text-lg">
                                <FaFileAlt />
                            </span>
                            <span className="tablet:block hidden">Blog</span>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
