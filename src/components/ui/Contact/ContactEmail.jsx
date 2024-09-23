import { motion } from "framer-motion";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

const ContactEmail = ({ isCopy, handleCopyEmail }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="flex justify-between w-[250px] md:w-[500px] xl:w-[800px] border border-slate-900 rounded-3xl pl-5"
    >
      <p className="truncate text-2xl py-3">hectorc2907@gmail.com</p>
      <button
        onClick={() => handleCopyEmail()}
        className="px-5 bg-slate-100 rounded-r-3xl border-l-[1px] border-slate-900 text-lg"
      >
        {isCopy ? (
          <div className="flex justify-center items-center gap-3">
            <LuCopyCheck />
            <span>Copiado</span>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-3">
            <LuCopy />
            <span>Copiar</span>
          </div>
        )}
      </button>
    </motion.div>
  );
};

export default ContactEmail;
