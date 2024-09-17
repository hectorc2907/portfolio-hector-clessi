import ProfileImage from "../../../../assets/images/profile3.jpg";
import { motion } from "framer-motion";

const ThirdSection = () => {
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
              ¡Hay Más!
            </motion.h2>
            <div className="flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center"
              >
                Además de lo que ya conté, me encanta hacer deportes. Disfruto
                salir a correr, caminar por las montañas, andar en bicicleta, ir
                al gimnasio, entre muchas otras actividades. Cualquier deporte
                me llama mucho la atención, lo que ha ayudado a mejorar mi
                rendimiento. Aunque no soy delgado ni estoy definido, tengo buen
                desempeño en casi cualquier tipo de actividad física.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-center"
              >
                Otro aspecto importante en mi vida son mis deseos de aventura.
                La frase: "¡Disfruten de la aventura!", que siempre les digo a
                mis amigos, nos ha llevado a lugares inesperados, tanto por
                buenas como por malas decisiones, pero siempre enfrentando los
                retos que nos proponemos. Esto ha fortalecido nuestros vínculos.
                Debo admitir que al principio soy un poco introvertido, pero una
                vez que agarro confianza, me vuelvo un buen compañero.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-center"
              >
                Creo firmemente en los valores de la honestidad y la confianza.
                Para mí, son fundamentales en cualquier relación. Con estos
                valores, en equipo, podemos llegar a cualquier parte. Siempre
                estoy trabajando en mejorar. Me encanta viajar, y gracias al
                Taekwon-do y a mi familia, conozco gran parte de Sudamérica. Me
                gusta leer, escribir, ir al cine, ver series y escuchar música.
                También disfruto de sentarme a tomar{" "}
                <a
                  href="https://es.wikipedia.org/wiki/Mate_(infusi%C3%B3n)"
                  className="font-bold"
                >
                  mates
                </a>{" "}
                en el parque o en las praderas, algo muy común en mi país.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="text-center"
              >
                Para cerrar, solo quiero saludar a todas las personas que me
                acompañan día a día en este largo camino llamado vida.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThirdSection;
