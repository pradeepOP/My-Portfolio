import { data } from "../data/data.js";
const Projects = () => {
  const project = data;
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-24 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6">Checkout some of my projects</p>
        </div>
        {/* container */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* card */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl tracking-wider text-white font bold ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  {item.live && (
                    <a href={item.live} target="_blank">
                      <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                        Live
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
