import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDailydotdev } from "react-icons/si";

const Footer = () => {
    return (
        <div className="bg-black pt-7 w-full px-2 font-mont">
            <p className="text-sky-300 font-bold font-merri text-2xl lg:text-3xl text-center">NahidPortfolio</p>
            <div className="flex flex-wrap justify-center gap-3 text-lg mt-4">
                <a className="rounded-full bg-white hover:bg-sky-500 p-2 hover:text-white duration-300" href="https://github.com/nhnaahid"><FaGithub /></a>
                <a className="rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 duration-300" href="https://www.linkedin.com/in/nahidiu45/"><FaLinkedin /></a>
                <a className="rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 duration-300" href="https://www.facebook.com/nazmulhasan.nahid.395/"><FaFacebook></FaFacebook></a>
                <a className="rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 duration-300" href="https://app.daily.dev/nhnaahid"><SiDailydotdev /></a>
            </div>
            <p className="text-gray-300 text-center mt-7 pb-4">© Copyright <span className="text-sky-300">Nazmul Hassan Nahid</span> | All Rights Reserved</p>
        </div>
    );
};

export default Footer;