import ProfileImage from "../../../../assets/images/profile2.png";
import { calculateTime } from "../../../../utils/calculateTime";
import { motion } from "framer-motion";

const SecondSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="bg-black text-white p-5 rounded-xl"
    >
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col justify-center items-center lg:w-full order-last xl:order-first">
          <div className="flex flex-col gap-10">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl font-guerrilla italic text-center"
            >
              Taekwon-do: Un Estilo de Vida
            </motion.h2>
            <div className="flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center"
              >
                Otra parte muy importante de mi vida es el Taekwon-do. Esta
                historia también comenzó cuando era pequeño; llevo alrededor de{" "}
                {calculateTime("2000-03-20")} año
                {calculateTime("2000-03-20") > 1 ? "s" : ""} relacionado con
                este hermoso arte marcial, todo gracias a mi padre y, por
                supuesto, a Dragon Ball.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-center"
              >
                Aunque al principio lo veía como un juego, no fue hasta mi
                primer torneo, la Copa Challenger, que esto cambió. Desde
                entonces, además de los entrenamientos con mi Sabonim, mi padre
                comenzó a entrenarme, y a medida que el tiempo avanzaba, mi
                progreso también lo hacía, logrando buenos resultados. Aquella
                primera derrota quedó atrás, alcanzando primeros puestos que me
                llevaron a ser reconocido como deportista destacado, tanto en mi
                institución de Taekwon-do como en mi ciudad natal, con tan solo
                8 años.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-center"
              >
                Con el tiempo, mi padre dejó de entrenarme y fue entonces cuando
                mi rendimiento comenzó a disminuir. Aunque seguía compitiendo
                bien, no logré alcanzar el objetivo máximo de clasificar a un
                campeonato mundial. En 2009, rendí mi examen para cinto negro,
                lo que me habilitó para competir en dicho torneo internacional,
                aunque no logré clasificar. Sin embargo, después de un tiempo,
                perdí el interés. La adolescencia trajo cambios de humor y
                decisiones que me alejaron del Taekwon-do. A pesar de varias
                idas y vueltas, el deseo de ir a un mundial nunca desapareció.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="text-center"
              >
                En 2023, volví a los entrenamientos con máxima intensidad.
                Aunque al principio lo veía como una forma de desestresarme, hoy
                tengo planeado avanzar mucho más, sobre todo en mi rol de
                instructor. Mi frase para el Taekwon-do es: "Si tú quieres
                aprender, yo te puedo enseñar, y si yo no lo sé, lo aprenderemos
                juntos". Aunque mi rol como competidor ha disminuido, sigo
                participando para motivar a los más pequeños a competir, ya que
                les ayudara a enfrentar tanto buenos como a malos resultados.
                ¿Y quién sabe? Tal vez en algún momento se me dé la oportunidad de
                clasificar al tan anhelado mundial.
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={ProfileImage}
            alt="taekwondo tournament"
            className="w-72 md:min-w-80 lg:min-w-96 rounded-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SecondSection;
