import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Profile from "../assets/profile.jpg";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] flex justify-between items-center">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 grid grid-cols-3 ">
        <div className="flex flex-col justify-center h-full col-span-2">
          <p className="text-pink-600 ">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Pradeep chhetri
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
            I'm a Full Stack developer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            A passionate programmar with a knack for creating dynamic and
            responsive web applications.
          </p>
          <div>
            <Link to="projects" smooth={true} duration={500}>
              <button className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600">
                View Projects
                <span className="duration-300 group-hover:rotate-90">
                  <HiArrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Profile}
            alt=""
            className="object-cover w-32 h-32 rounded-full md:w-48 md:h-48 border-[3px] "
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
