import { FaFacebook, FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiDailydotdev } from "react-icons/si";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const forom = e.target;
        emailjs
            .sendForm('service_vdh9t88', 'template_sfjqh5w', form.current, {
                publicKey: 'k2CYpd1V08eMAdAol',
            })
            .then(
                (res) => {
                    if (res.status) {
                        toast.success("Message Sent.");
                    }
                },
                (error) => {
                    toast.error("Error Occurred.");
                    console.log('FAILED...', error.text);
                },
            );
        forom.reset();
    };
    return (
        <div id="contact" className='p-2 md:p-5 font-mont text-black flex flex-col md:flex-row gap-2 items-start justify-between mt-16'>
            {/* contact me */}
            <div className="w-full md:w-1/2 lg:w-2/5 h-full bg-base-200 rounded-xl p-3 lg:p-5">
                <h1 className="font-merri font-bold text-2xl lg:text-3xl">Contact Me</h1>
                <div className="flex gap-2 justify-start items-center mt-3 lg:mt-5">
                    <MdEmail className="text-lg lg:text-xl fill-sky-600" />
                    <p className="text-sm lg:text-lg">nhnahid.iu@gmail.com</p>
                </div>
                <div className="flex gap-2 justify-start items-center mt-2">
                    <FaPhoneSquareAlt className="text-lg lg:text-xl fill-sky-600" />
                    <p className="text-xs lg:text-base">+8801734-181559</p>
                </div>

                <div className="w-full flex flex-wrap justify-start gap-3 text-lg mt-5 lg:mt-7">
                    <a className="rounded-full bg-white hover:bg-sky-500 p-2 hover:text-white duration-300" href="https://github.com/nhnaahid"><FaGithub /></a>
                    <a className="rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 duration-300" href="https://www.linkedin.com/in/nahidiu45/"><FaLinkedin /></a>
                    <a className="rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 duration-300" href="https://www.facebook.com/nazmulhasan.nahid.395/"><FaFacebook></FaFacebook></a>
                    <a className="rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 duration-300" href="https://app.daily.dev/nhnaahid"><SiDailydotdev /></a>
                </div>
                <a href="/resume-nahid.pdf" download="resume-nahid.pdf"><button className="mt-5 lg:mt-7 btn btn-sm btn-outline text-xs text-sky-600 lg:font-bold hover:text-white hover:bg-gradient-to-r from-sky-900 to-sky-400 hover:border-none duration-500">Download Resume</button></a>
            </div>

            {/* form */}
            <div className="w-full md:w-1/2 lg:w-3/5 h-full bg-base-200 p-3 lg:p-5 rounded-xl">
                <form ref={form} onSubmit={sendEmail} className="grid space-y-2" >

                    <input type="text" name="from_name" required placeholder="Your Name" className="input input-sm lg:input-md input-bordered w-full" />

                    <input type="email" name="from_email" required placeholder="Your Email" className="input input-sm lg:input-md input-bordered w-full" />

                    <textarea
                        name="message"
                        required
                        placeholder="Your Message"
                        className="textarea textarea-sm lg:textarea-md textarea-bordered textarea-md w-full">
                    </textarea>

                    <input className="btn btn-sm lg:btn-md btn-outline text-sky-600 lg:font-bold hover:text-white hover:bg-gradient-to-r from-sky-800 to-sky-300 hover:border-none duration-500" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;