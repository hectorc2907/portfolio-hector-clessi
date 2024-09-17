import ProfileImage from "../../../../assets/images/profile1.jpg";
import { calculateTime } from "../../../../utils/calculateTime";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="bg-black text-white p-5 rounded-xl"
    >
      <div className="flex flex-col xl:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={ProfileImage}
            alt="Me"
            className="w-72 md:min-w-80 lg:min-w-96 rounded-xl"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center lg:w-full ">
          <div className="flex flex-col gap-10">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl font-guerrilla italic text-center"
            >
              La Tecnología y Yo
            </motion.h2>
            <div className="flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center"
              >
                ¡Hola! Soy{" "}
                <span className="font-bold italic">Héctor Alberto Clessi</span>,
                tengo {calculateTime("1996-07-29")} años y soy{" "}
                <span className="font-bold italic">Programador Full-Stack</span>{" "}
                desde hace {calculateTime("2023-08-14")} año
                {calculateTime("2023-08-14") > 1 ? "s" : ""}.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-center"
              >
                Soy de Tucumán, Argentina. Mi historia con la tecnología comenzó
                desde una temprana edad. Tuve la suerte de que mi abuela tuviera
                acceso a una computadora con Windows 98. Mi primer acercamiento
                fue a través de videojuegos estratégicos como Age of Empires 2,
                lo cual desarrolló mi habilidad para la lógica.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-center"
              >
                Con el tiempo, dejé la informática de lado y seguí la carrera de
                Contabilidad por recomendación de mi padre, debido a mi
                facilidad con los cálculos matemáticos. Aunque me iba bien,
                sentía que no era lo que realmente me apasionaba. En 2016,
                gracias al apoyo de una amiga, decidí retomar mi interés por la
                informática. Ella me pidió ayuda con un proyecto web para su
                carrera. La ayudé, pero el proyecto no estaba desplegado y no
                tuvo éxito. Esta experiencia despertó mi curiosidad: ¿cómo se
                habría hecho correctamente? ¿Qué le habría faltado? Desde
                entonces, recuperé el cariño que había perdido por la
                informática.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="text-center"
              >
                No fue hasta 2022 que decidí dedicarme por completo a la
                programación, gracias al apoyo de una persona muy importante en
                mi vida. En 2023, obtuve mi mayor certificación en la escuela de
                programador RollingCode School, lo que marcó un hito importante
                en mi carrera. Allí aprendí el Stack MERN, así como habilidades
                blandas y técnicas, y la importancia del trabajo colaborativo.
                Hasta ese entonces, solo había trabajado solo en mis proyectos.
                Desde que terminé el curso, he continuado estudiando de manera
                autodidacta y desarrollándome día a día con las nuevas
                tecnologías.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FirstSection;
