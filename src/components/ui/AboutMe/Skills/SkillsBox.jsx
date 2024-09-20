import { motion } from "framer-motion";

const SkillsBox = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="bg-white flex flex-col p-5 rounded-2xl shadow-md shadow-slate-900"
      >
        <h3 className="py-3 text-center text-2xl font-semibold italic font-guerrilla">
          Front-End
        </h3>
        <p className="py-3">
          Soy desarrollador especializado en front-end, utilizando tecnologías
          modernas como React, React Native, Tailwind CSS y Bootstrap para crear
          interfaces atractivas, dinámicas y altamente responsivas. Me enfoco en
          ofrecer experiencias de usuario fluidas y optimizadas, tanto en
          aplicaciones web como móviles, asegurando un diseño consistente y un
          rendimiento rápido en cualquier dispositivo. Mi pasión es transformar
          ideas en interfaces funcionales, centrándome en la accesibilidad y la
          interacción intuitiva.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="bg-white flex flex-col p-5 rounded-2xl shadow-md shadow-slate-900"
      >
        <h3 className="py-3 text-center text-2xl font-semibold italic font-guerrilla">
          Back-End
        </h3>
        <p className="py-3">
          En el ámbito del back-end, desarrollo soluciones robustas utilizando
          Express para crear APIs escalables y seguras. Me aseguro de que cada
          sistema esté diseñado para manejar eficientemente las interacciones
          del lado del servidor, ofreciendo integraciones sólidas con bases de
          datos y asegurando que las aplicaciones funcionen sin problemas detrás
          de escena. Mi prioridad es garantizar que los sistemas sean
          eficientes, bien estructurados y fáciles de mantener.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="bg-white flex flex-col p-5 rounded-2xl shadow-md shadow-slate-900"
      >
        <h3 className="py-3 text-center text-2xl font-semibold italic font-guerrilla">
          Base de Datos
        </h3>
        <p className="py-3">
          En cuanto a bases de datos, tengo experiencia trabajando tanto con
          sistemas NoSQL como MongoDB, como con bases de datos relacionales como
          MySQL. Implemento soluciones de almacenamiento de datos que optimizan
          el rendimiento y permiten un manejo eficiente de la información. Me
          especializo en diseñar bases de datos escalables y seguras, asegurando
          que los datos estén organizados de manera óptima para soportar
          aplicaciones tanto en entornos pequeños como en proyectos a gran
          escala.
        </p>
      </motion.div>
    </div>
  );
};

export default SkillsBox;
