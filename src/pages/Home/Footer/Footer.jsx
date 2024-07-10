import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDailydotdev } from "react-icons/si";

const Footer = () => {
    return (
        <div className="bg-black pt-7 w-full">
            <p className="text-sky-300 font-bold font-merri text-2xl text-center">NahidPortfolio</p>
            <div className="flex flex-wrap justify-center gap-3 text-lg mt-4">
                <a className="rounded-full bg-white hover:bg-sky-500 p-2 hover:text-white duration-300" href="https://x.com/?lang=en"><FaGithub /></a>
                <a className="rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 duration-300" href="https://x.com/?lang=en"><FaLinkedin /></a>
                <a className="rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 duration-300" href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
                <a className="rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 duration-300" href="https://www.instagram.com/"><SiDailydotdev /></a>
            </div>
            <p className="text-gray-300 text-center mt-7 pb-4">© Copyright Nazmul Hassan Nahid All Rights Reserved</p>
        </div>
    );
};

export default Footer;