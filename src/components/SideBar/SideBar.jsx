import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import nahid from '../../assets/me.jpg'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GoProjectRoadmap } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { SiDailydotdev } from "react-icons/si";
import { PiGraduationCap } from "react-icons/pi";

const SideBar = () => {
    const [open, setOpen] = useState(false);

    function scrollToSection(text) {
        var targetSection = document.getElementById(text);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="font-mont font-semibold">
            <div onClick={() => setOpen(!open)} className="flex justify-end md:hidden fixed w-full pt-3 z-50">
                {
                    open ? <RxCross1 className="text-4xl rounded-full p-2 bg-sky-500 text-gray-200" /> : <RiMenu3Fill className="text-4xl rounded-full p-2 bg-sky-500 text-gray-200" />
                }
                <div className={`${open ? 'left-0 top-0' : '-left-72 top-0'} duration-700 flex flex-col items-start md:hidden absolute p-4 gap-2 bg-black text-gray-200 h-screen`}>
                    <div className="avatar w-full mt-5">
                        <div className="w-32 rounded-full mx-auto border-4 border-gray-800">
                            <img src={nahid} />
                        </div>
                    </div>
                    <div className="text-center mt-1">
                        <h2 className="text-xl font-semibold">Nazmul Hassan Nahid</h2>
                    </div>
                    <div className="w-full flex flex-wrap justify-center gap-3 text-lg mt-1">
                        <a className="rounded-full bg-gray-800 hover:bg-sky-500 p-2 duration-300" href="https://x.com/?lang=en"><FaGithub /></a>
                        <a className="rounded-full bg-gray-800 hover:bg-sky-500 p-2 duration-300" href="https://x.com/?lang=en"><FaLinkedin /></a>
                        <a className="rounded-full bg-gray-800 hover:bg-sky-500 p-2 duration-300" href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
                        <a className="rounded-full bg-gray-800 hover:bg-sky-500 p-2 duration-300" href="https://www.instagram.com/"><SiDailydotdev /></a>
                    </div>
                    <div className="pt-7">
                        <ul className="px-5 space-y-5">
                            <li className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                                <IoHomeOutline />
                                <p>Home</p>
                            </li>
                            <li className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                                <CiUser />
                                <p>About</p>
                            </li>
                            <li className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                                <PiGraduationCap className="text-xl" />
                                <p>Education</p>
                            </li>
                            <li className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                                <IoSettingsOutline className="text-xl" />
                                <p>Skills</p>
                            </li>
                            <li className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                                <GoProjectRoadmap />
                                <p>Projects</p>
                            </li>
                            <li className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                                <TfiEmail />
                                <p>Contact</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* original */}
            <div className="w-64 h-screen bg-black text-gray-200 fixed space-y-3 hidden md:block">
                <div className="avatar w-full mt-12">
                    <div className="w-32 rounded-full mx-auto border-4 border-gray-800">
                        <img src={nahid} />
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Nazmul Hassan Nahid</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-3 text-lg">
                    <a className="rounded-full bg-gray-800 hover:bg-sky-500 p-2 duration-300" href="https://x.com/?lang=en"><FaGithub /></a>
                    <a className="rounded-full bg-gray-800 hover:bg-sky-500 p-2 duration-300" href="https://x.com/?lang=en"><FaLinkedin /></a>
                    <a className="rounded-full bg-gray-800 hover:bg-sky-500 p-2 duration-300" href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
                    <a className="rounded-full bg-gray-800 hover:bg-sky-500 p-2 duration-300" href="https://www.instagram.com/"><SiDailydotdev /></a>
                </div>
                <div className="pt-7">
                    <ul className="px-5 space-y-5">
                        <li onClick={() => scrollToSection("home")} className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                            <IoHomeOutline className="text-lg" />
                            <p>Home</p>
                        </li>
                        <li onClick={() => scrollToSection("about")} className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                            <CiUser className="text-xl" />
                            <p>About</p>
                        </li>
                        <li onClick={() => scrollToSection("education")} className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                            <PiGraduationCap className="text-xl" />
                            <p>Education</p>
                        </li>
                        <li onClick={() => scrollToSection("skills")} className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                            <IoSettingsOutline className="text-xl" />
                            <p>Skills</p>
                        </li>
                        <li onClick={() => scrollToSection("projects")} className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                            <GoProjectRoadmap className="text-lg" />
                            <p>Projects</p>
                        </li>
                        <li onClick={() => scrollToSection("contact")} className="flex items-center gap-2 hover:text-sky-500 duration-300 cursor-pointer">
                            <TfiEmail className="text-lg" />
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default SideBar;