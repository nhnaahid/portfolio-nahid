import skillup from '../../../assets/projects/skillup.png'
import alter from '../../../assets/projects/alterwhite.png'
import krafti from '../../../assets/projects/krafti.png'
import { GoArrowUpRight } from 'react-icons/go';

import su1 from '../../../assets/pages/SkillUp-Home.png'
import su2 from '../../../assets/pages/SkillUp-popular.png'
import su3 from '../../../assets/pages/SkillUp-feedback.png'
import su4 from '../../../assets/pages/SkillUp-Course-Details.png'
import su5 from '../../../assets/pages/SkillUp-Teacher-Courses.png'

import aw1 from '../../../assets/pages/alterwhite-home.png'
import aw2 from '../../../assets/pages/AlterWhite-All-Queries.png'
import aw3 from '../../../assets/pages/AlterWhite-Query-Details.png'

import kr1 from '../../../assets/pages/Krafti-Home.png'
import kr2 from '../../../assets/pages/Krafti-All-Crafts.png'
import kr3 from '../../../assets/pages/Krafti-Craft-Earthy-Elegance-Homeware.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { BiLogoGithub } from 'react-icons/bi';

const Projects = () => {
    return (
        <div className='p-2 md:p-5 font-mont text-black space-y-5'>
            <h1 className="w-fit text-3xl font-bold border-b-2 border-sky-500 font-merri pb-1">Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {/* skillup */}
                <div className="relative group h-64 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-full">
                        <img className='w-full h-full object-cover' src={skillup} alt="" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-700 to-sky-100 opacity-90 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 h-full">
                        <div className='flex flex-col items-center justify-center w-full h-full space-y-1'>
                            <h2 className='text-black font-bold font-merri text-center text-2xl'>SkillUp</h2>
                            <p className='text-black font-bold font-merri text-center pb-2'>Web Application For Educational Course Management System.</p>
                            <button onClick={() => document.getElementById('my_modal_1').showModal()}><GoArrowUpRight className='text-center text-4xl bg-sky-700 rounded-full p-1 cursor-pointer hover:bg-sky-300 hover:text-black duration-500' /></button>
                        </div>
                    </div>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box w-11/12 max-w-3xl">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className='border-b pb-1 space-y-1'>
                                <h1 className='font-merri font-bold text-2xl'>SkillUp</h1>
                                <p>Web Application For Educational Course Management System.</p>
                                <div className='flex gap-2 text-3xl items-center'>
                                    <Link className='tooltip' data-tip="Live Site" to="https://skillup-57533.web.app/"><TbWorld className='hover:text-sky-500 duration-300' /></Link>
                                    <Link className='tooltip' data-tip="Client Repo" to="https://github.com/nhnaahid/skillup-client"><BiLogoGithub className='hover:text-sky-500 duration-300' /></Link>
                                    <Link className='tooltip' data-tip="Server Repo" to="https://github.com/nhnaahid/skillup-server"><BiLogoGithub className='hover:text-sky-500 duration-300' /></Link>
                                </div>
                            </div>
                            <div>
                                {/* sliders */}
                                <div className='mt-5'>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide><img src={su1} alt="SkillUp pages" /></SwiperSlide>
                                        <SwiperSlide><img src={su2} alt="SkillUp pages" /></SwiperSlide>
                                        <SwiperSlide><img src={su3} alt="SkillUp pages" /></SwiperSlide>
                                        <SwiperSlide><img src={su4} alt="SkillUp pages" /></SwiperSlide>
                                        <SwiperSlide><img src={su5} alt="SkillUp pages" /></SwiperSlide>
                                    </Swiper>
                                </div>
                                {/* details */}
                                <div className='space-y-5 mt-5'>
                                    <div className='space-y-2'>
                                        <h2 className='text-xl font-bold font-merri text-sky-600'>Project Overview</h2>
                                        <p className='mt-2'>SkillUp is an online learning and educational course management platform.Here teachers can add courses, students can browse and enroll in courses, and make payments through Stripe. Teachers can provide assignments for a course and students have to submit the assignment before the deadline. Admin can manage all the user's behavior. Separate dashboards for admin, teacher, and student will help to keep their functionalities separate.</p>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold font-merri text-sky-600'>Key Features</h2>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Firebase Authentication.</li>
                                            <li>MongoDB CRUD Operations.</li>
                                            <li>JSON Web Token (JWT) Security.</li>
                                            <li>Payment Gateway - Stripe</li>
                                            <li>Responsive Design.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold font-merri text-sky-600'>Tech Stack</h2>
                                        <div className='mt-2'>
                                            <p><span className="font-bold">Frontend: </span>Tailwind.css, React.js.</p>
                                            <p><span className="font-bold">Backend: </span>Node.js, Express.js.</p>
                                            <p><span className="font-bold">Database: </span>MongoDB.</p>
                                            <p><span className="font-bold">Tools and Packages: </span>Firebase, JWT, Stripe, Axios, React Hook Form.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
                {/* alterwhite */}
                <div className="relative group h-64 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-full">
                        <img className='w-full h-full object-cover' src={alter} alt="" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-700 to-sky-100 opacity-90 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 h-full">
                        <div className='flex flex-col items-center justify-center w-full h-full space-y-1'>
                            <h2 className='text-black font-bold font-merri text-center text-2xl'>AlterWhite</h2>
                            <p className='text-black font-bold font-merri text-center pb-2'>Web Application For Alternative Product Information System</p>
                            <button onClick={() => document.getElementById('my_modal_2').showModal()}><GoArrowUpRight className='text-center text-4xl bg-sky-700 rounded-full p-1 cursor-pointer hover:bg-sky-300 hover:text-black duration-500' /></button>
                        </div>
                    </div>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box w-11/12 max-w-3xl">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className='border-b pb-1 space-y-1'>
                                <h1 className='font-merri font-bold text-2xl'>AlterWhite</h1>
                                <p>Web Application For Alternative Product Information System.</p>
                                <div className='flex gap-2 text-3xl items-center'>
                                    <Link className='tooltip' data-tip="Live Site" to="https://alterwhite-507f4.web.app/"><TbWorld className='hover:text-sky-500 duration-300' /></Link>
                                    <Link className='tooltip' data-tip="Client Repo" to="https://github.com/nhnaahid/alterwhite-client"><BiLogoGithub className='hover:text-sky-500 duration-300' /></Link>
                                    <Link className='tooltip' data-tip="Server Repo" to="https://github.com/nhnaahid/alterwhite-server"><BiLogoGithub className='hover:text-sky-500 duration-300' /></Link>
                                </div>
                            </div>
                            <div>
                                {/* sliders */}
                                <div className='mt-5'>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide><img src={aw1} alt="SkillUp pages" /></SwiperSlide>
                                        <SwiperSlide><img src={aw2} alt="SkillUp pages" /></SwiperSlide>
                                        <SwiperSlide><img src={aw3} alt="SkillUp pages" /></SwiperSlide>
                                    </Swiper>
                                </div>
                                {/* details */}
                                <div className='space-y-5 mt-5'>
                                    <div className='space-y-2'>
                                        <h2 className='text-xl font-bold font-merri text-sky-600'>Project Overview</h2>
                                        <p className='mt-2'>AlterWhite is an Alternative Product Information System web application designed to enhance user experience by providing a comprehensive platform for managing and exploring product-related queries. With a focus on responsiveness and user-friendliness, security, and efficiency, AlterWhite allows users to create account, browse and search for product queries, and manage recommendations.</p>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold font-merri text-sky-600'>Key Features</h2>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Firebase Authentication.</li>
                                            <li>MongoDB CRUD Operations.</li>
                                            <li>JSON Web Token (JWT) Security.</li>
                                            <li>Search Functionality.</li>
                                            <li>Responsive Design.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold font-merri text-sky-600'>Tech Stack</h2>
                                        <div className='mt-2'>
                                            <p><span className="font-bold">Frontend: </span>Tailwind.css, React.js.</p>
                                            <p><span className="font-bold">Backend: </span>Node.js, Express.js.</p>
                                            <p><span className="font-bold">Database: </span>MongoDB.</p>
                                            <p><span className="font-bold">Tools and Packages: </span>Firebase, JWT, Axios, React Hook Form.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
                {/* krafti */}
                <div className="relative group h-64 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-full">
                        <img className='w-full h-full object-cover' src={krafti} alt="" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-700 to-sky-100 opacity-90 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 h-full">
                        <div className='flex flex-col items-center justify-center w-full h-full space-y-1'>
                            <h2 className='text-black font-bold font-merri text-center text-2xl'>Krafti</h2>
                            <p className='text-black font-bold font-merri text-center pb-2'>Web Application For Wood & Jute Crafts Store.</p>
                            <button onClick={() => document.getElementById('my_modal_3').showModal()}><GoArrowUpRight className='text-center text-4xl bg-sky-700 rounded-full p-1 cursor-pointer hover:bg-sky-300 hover:text-black duration-500' /></button>
                        </div>
                    </div>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box w-11/12 max-w-3xl">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className='border-b pb-1 space-y-1'>
                                <h1 className='font-merri font-bold text-2xl'>Krafti</h1>
                                <p>Web Application For Wood & Jute Crafts Store.</p>
                                <div className='flex gap-2 text-3xl items-center'>
                                    <Link className='tooltip' data-tip="Live Site" to="https://krafti-a97d7.web.app/"><TbWorld className='hover:text-sky-500 duration-300' /></Link>
                                    <Link className='tooltip' data-tip="Client Repo" to="https://github.com/nhnaahid/Krafti"><BiLogoGithub className='hover:text-sky-500 duration-300' /></Link>
                                    <Link className='tooltip' data-tip="Server Repo" to="https://github.com/nhnaahid/Krafti-server"><BiLogoGithub className='hover:text-sky-500 duration-300' /></Link>
                                </div>
                            </div>
                            <div>
                                {/* sliders */}
                                <div className='mt-5'>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide><img src={kr1} alt="SkillUp pages" /></SwiperSlide>
                                        <SwiperSlide><img src={kr2} alt="SkillUp pages" /></SwiperSlide>
                                        <SwiperSlide><img src={kr3} alt="SkillUp pages" /></SwiperSlide>
                                    </Swiper>
                                </div>
                                {/* details */}
                                <div className='space-y-5 mt-5'>
                                    <div className='space-y-2'>
                                        <h2 className='text-xl font-bold font-merri text-sky-600'>Project Overview</h2>
                                        <p className='mt-2'>Krafti is a web web application for jute and wooden craft store. Where user can create account, browse, add, update, delete craft items, view details of craft items, view their added craft items by filtering.</p>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold font-merri text-sky-600'>Key Features</h2>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Firebase Authentication.</li>
                                            <li>MongoDB CRUD Operations.</li>
                                            <li>Responsive Design.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold font-merri text-sky-600'>Tech Stack</h2>
                                        <div className='mt-2'>
                                            <p><span className="font-bold">Frontend: </span>Tailwind.css, React.js.</p>
                                            <p><span className="font-bold">Backend: </span>Node.js, Express.js.</p>
                                            <p><span className="font-bold">Database: </span>MongoDB.</p>
                                            <p><span className="font-bold">Tools and Packages: </span>Firebase, Swiper slider, React Awesome reveal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Projects;