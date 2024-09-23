import { MyExperience } from "../../../mocks/MyExperience";

const Resume = () => {
  return (
    <>
      <section className="bg-blue-900 md:bg-white px-5 py-10 flex justify-center text-white">
        <div className="bg-blue-900 container grid grid-cols-1 gap-10 rounded-2xl p-5">
          <h2 className="text-4xl italic font-semibold text-center">
            Trayectoria
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-5">
              <h3 className="text-center text-2xl italic">
                Experiencia Profesional
              </h3>
              <div className="grid grid-cols-1 gap-5 text-black">
                {MyExperience.reverse().map((experience) => (
                  <div className="grid grid-cols-1 bg-white rounded-2xl px-5 shadow-md shadow-slate-900">
                    <p className="text-center text-xl font-semibold">
                      {experience.position}
                    </p>
                    <p className="text-center">
                      Trayectoria: {experience.timeline}
                    </p>
                    <p className="text-center py-5">{experience.description}</p>
                    <p>Compañia: {experience.company}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
