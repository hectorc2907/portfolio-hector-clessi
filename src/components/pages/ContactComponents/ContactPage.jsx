import Meta from "../../ui/Meta";
import { motion } from "framer-motion";

const ContactPage = () => {
  const email = "hectorc2907@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert(`¡Correo copiado!`);
  };

  return (
    <>
      <Meta title="Contactos" />
      <div className="text-white flex flex-col items-center gap-10">
        <div className="container grid grid-cols-1 gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center font-roboto text-5xl pt-10"
          >
            ¡Contactame!
          </motion.h1>
          <div className="flex items-center">
            <input
              type="text"
              value={email}
              readOnly
              className="border border-gray-300 text-black p-2 mr-2"
              style={{ minWidth: "200px" }}
            />
            <button
              onClick={handleCopy}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Copiar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
