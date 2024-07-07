
const About = () => {
    return (
        <div className='p-2 md:p-5 font-mont text-black space-y-5'>
            <h1 className="w-fit text-3xl font-bold border-b-2 border-sky-500 font-merri">About</h1>
            <p >A motivated CSE graduate equipped with a solid foundation in computer science principles and practical skills acquired through competitive programming, academic, and personal projects, and comprehensive training on web development. I am now seeking a position as a software engineer in a challenging environment to make the best use of my skills with continuous learning opportunities. </p>
            <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-3 justify-between items-center'>
                {/* education */}
                <div className='rounded-xl p-3 space-y-5 h-full bg-blue-50'>
                    <h2 className="font-merri font-bold text-xl text-sky-500">Education</h2>
                    <div>
                        <p className="font-bold">M. Sc. | 2021 – 2022</p>
                        <p>Islamic University, Bangladesh. <br />
                            Major – Computer Science & Engineering. <br />
                            CGPA – 3.15
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">B. Sc. | 2015 – 2021 </p>
                        <p>Islamic University, Bangladesh. <br />
                            Major – Computer Science & Engineering. <br />
                            CGPA – 3.04
                        </p>
                    </div>
                </div>
                {/* skills */}
                <div className='rounded-xl p-3 space-y-5 h-full bg-blue-50'>
                    <h2 className="font-merri font-bold text-xl text-sky-500">Skills</h2>
                    <div className="space-y-2">
                        <p><span className="font-bold">Languages: </span>C, C++, JavaScript.</p>
                        <p><span className="font-bold">Frontend: </span>HTML5, CSS3, Tailwind.css, React.js.</p>
                        <p><span className="font-bold">Backend: </span>Node.js, Express.js.</p>
                        <p><span className="font-bold">Database: </span>MongoDB.</p>
                        <p><span className="font-bold">Others: </span>Firebase, JWT, Git & Github, Data Structures and Algorithms, Problem solving, Basic OOP.</p>
                    </div>
                </div>
                {/* Experience */}
                <div className='rounded-xl p-3 space-y-5 h-full bg-blue-50'>
                    <h2 className="font-merri font-bold text-xl text-sky-500">Experience</h2>
                    <ul className="list-disc list-inside">
                        <li>Fresher.</li>
                        <li>Seeking my first professional role.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;