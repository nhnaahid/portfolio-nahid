import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import nahid from '../../assets/me.jpg'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GoProjectRoadmap } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { SiDailydotdev } from "react-icons/si";

const SideBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setOpen(!open)} className="flex justify-end md:hidden fixed w-full pt-3">
                {
                    open ? <RxCross1 className="text-4xl border rounded-full p-2 bg-blue-500 text-white" /> : <RiMenu3Fill className="text-4xl border rounded-full p-2 bg-blue-500 text-white" />
                }
                <div className={`${open ? 'left-0 top-0' : '-left-60 top-0'} duration-700 flex flex-col items-start md:hidden absolute p-4 gap-2 bg-black text-white h-screen`}>
                    <div className="avatar w-full mt-12">
                        <div className="w-32 rounded-full mx-auto border-4 border-gray-800">
                            <img src={nahid} />
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="uppercase">nazmul hassan nahid</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 text-xl">
                        <a className="rounded-full bg-gray-800 hover:bg-sky-700 p-2" href="https://x.com/?lang=en"><FaGithub /></a>
                        <a className="rounded-full bg-gray-800 hover:bg-sky-700 p-2" href="https://x.com/?lang=en"><FaLinkedin /></a>
                        <a className="rounded-full bg-gray-800 hover:bg-sky-700 p-2" href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
                        <a className="rounded-full bg-gray-800 hover:bg-sky-700 p-2" href="https://www.instagram.com/"><SiDailydotdev /></a>
                    </div>
                    <div className="pt-7">
                        <ul className="px-5 space-y-5">
                            <li className="flex items-center gap-2 hover:text-sky-500 cursor-pointer">
                                <IoHomeOutline />
                                <p>Home</p>
                            </li>
                            <li className="flex items-center gap-2 hover:text-sky-500 cursor-pointer">
                                <CiUser />
                                <p>About</p>
                            </li>
                            <li className="flex items-center gap-2 hover:text-sky-500 cursor-pointer">
                                <GoProjectRoadmap />
                                <p>Projects</p>
                            </li>
                            <li className="flex items-center gap-2 hover:text-sky-500 cursor-pointer">
                                <TfiEmail />
                                <p>Contact</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* original */}
            <div className="w-64 h-screen bg-black text-white fixed space-y-3 hidden md:block">
                <div className="avatar w-full mt-12">
                    <div className="w-32 rounded-full mx-auto border-4 border-gray-800">
                        <img src={nahid} />
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="uppercase">nazmul hassan nahid</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-3 text-xl">
                    <a className="rounded-full bg-gray-800 hover:bg-sky-700 p-2" href="https://x.com/?lang=en"><FaGithub /></a>
                    <a className="rounded-full bg-gray-800 hover:bg-sky-700 p-2" href="https://x.com/?lang=en"><FaLinkedin /></a>
                    <a className="rounded-full bg-gray-800 hover:bg-sky-700 p-2" href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
                    <a className="rounded-full bg-gray-800 hover:bg-sky-700 p-2" href="https://www.instagram.com/"><SiDailydotdev /></a>
                </div>
                <div className="pt-7">
                    <ul className="px-5 space-y-5">
                        <li className="flex items-center gap-2 hover:text-sky-500 cursor-pointer">
                            <IoHomeOutline />
                            <p>Home</p>
                        </li>
                        <li className="flex items-center gap-2 hover:text-sky-500 cursor-pointer">
                            <CiUser />
                            <p>About</p>
                        </li>
                        <li className="flex items-center gap-2 hover:text-sky-500 cursor-pointer">
                            <GoProjectRoadmap />
                            <p>Projects</p>
                        </li>
                        <li className="flex items-center gap-2 hover:text-sky-500 cursor-pointer">
                            <TfiEmail />
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default SideBar;