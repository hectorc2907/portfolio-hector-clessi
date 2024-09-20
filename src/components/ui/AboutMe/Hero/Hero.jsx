import ImageProfile from "../../../../assets/images/profile.jpg";
import { motion } from "framer-motion";
import { calculateAge } from "../../../../utils/dateUtils";

const Hero = () => {
  return (
    <>
      <section className="px-5 py-10 flex justify-center">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Hero Info */}
          <div className="flex justify-center lg:justify-start items-center order-2 lg:order-1">
            {/* Hero Title */}
            <div className="text-center">
              <div className="text-4xl font-semibold">
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  ¡Hola!,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  Soy <span className="text-blue-700">Hector Clessi</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  Desarrollador Full-Stack
                </motion.p>
              </div>
              {/* Hero Description */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="text-xl text-center text-slate-700 mt-4"
              >
                <p>
                  Con {calculateAge("2023-08-14")}{" "}
                  {calculateAge("2023-08-14") > 1
                    ? "años de experiencia"
                    : "año de experiencia"}
                  , me especializo en crear soluciones atractivas y eficientes
                  en el <span className="font-bold">Front-End</span> y{" "}
                  <span className="font-bold">Back-End</span>, además de
                  trabajar con bases de datos{" "}
                  <span className="font-bold">NoSQL</span> y{" "}
                  <span className="font-bold">SQL</span>.
                </p>
              </motion.div>
              {/* Hero Button CV */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="flex justify-center mt-4"
              >
                <a href="">
                  <div className="w-[250px] py-3 text-center border shadow-sm hover:shadow-md hover:shadow-slate-300">
                    Ver Curriculum Vitae
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <img
              src={ImageProfile}
              alt="Profile Image Me"
              className="max-w-80 md:max-w-96 lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[600px] shadow-lg shadow-slate-300 rounded-2xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
