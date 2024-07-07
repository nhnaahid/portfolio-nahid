import skillup from '../../../assets/projects/skillup.png'
import alter from '../../../assets/projects/alterwhite.png'
import krafti from '../../../assets/projects/krafti.png'

const Projects = () => {
    return (
        <div className='p-2 md:p-5 font-mont text-black space-y-5'>
            <h1 className="w-fit text-3xl font-bold border-b-2 border-sky-500 font-merri pb-1">Projects</h1>
            <div className='grid grid-cols-3 gap-3'>
                {/* skillup */}
                <div className="relative group h-64 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-full">
                        <img className='w-full h-full object-cover' src={skillup} alt="" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-700 to-sky-100 opacity-80 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 h-full">
                        <p className='text-sky-400'>SkillUp</p>
                    </div>
                </div>
                {/* alterwhite */}
                <div className="relative group h-64 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-full">
                        <img className='w-full h-full object-cover' src={alter} alt="" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-700 to-sky-100 opacity-80 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 h-full">
                        <p>AlterWhite</p>
                    </div>
                </div>
                {/* krafti */}
                <div className="relative group h-64 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-full">
                        <img className='w-full h-full object-cover' src={krafti} alt="" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-700 to-sky-100 opacity-80 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 h-full">
                        <p>Krafti</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;