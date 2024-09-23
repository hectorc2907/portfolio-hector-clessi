import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hectorc2907@gmail.com").then(() => {
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 2000);
    });
  };
  return (
    <>
      <section className="px-5 py-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container border p-5 px-2 md:px-5 border-blue-900 rounded-2xl shadow-md grid grid-cols-1 gap-5"
        >
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl italic font-semibold text-center"
          >
            Contactos
          </motion.h2>
          <div className="flex flex-col items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="bg-[#126BC4] hover:bg-[#085AAC] w-[250px] rounded-3xl"
              >
                <a
                  href="https://www.linkedin.com/in/hector-clessi/"
                  target="_blank"
                  className="flex justify-center items-center text-white gap-3 text-2xl py-2"
                >
                  <FaLinkedin />
                  <p>LinkedIn</p>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="bg-[#1CC33D] hover:bg-[#08AD5E] w-[250px] rounded-3xl"
              >
                <a
                  href="https://wa.me/5493812033116"
                  target="_blank"
                  className="flex justify-center items-center text-white gap-3 text-2xl py-2"
                >
                  <FaWhatsapp />
                  <p>WhatsApp</p>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="bg-[#0884FF] hover:bg-[#415CA0] w-[250px] rounded-3xl"
              >
                <a
                  href="https://www.facebook.com/hectoralberto.clessi/"
                  target="_blank"
                  className="flex justify-center items-center text-white gap-3 text-2xl py-2"
                >
                  <FaFacebook />
                  <p>Facebook</p>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="bg-[#F83E0C] hover:bg-[#C8407A] w-[250px] rounded-3xl"
              >
                <a
                  href="https://www.instagram.com/hectorc2907/"
                  target="_blank"
                  className="flex justify-center items-center text-white gap-3 text-2xl py-2"
                >
                  <FaInstagram />
                  <p>Instagram</p>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="bg-[#1D2A32] hover:bg-[#080808] w-[250px] rounded-3xl"
              >
                <a
                  href="https://x.com/HClessi"
                  target="_blank"
                  className="flex justify-center items-center text-white gap-3 text-2xl py-2"
                >
                  <FaXTwitter />
                  <p>X - Twitter</p>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="bg-[#72C4EC] hover:bg-[#2599CA] w-[250px] rounded-3xl"
              >
                <a
                  href="https://t.me/hectorc2907"
                  target="_blank"
                  className="flex justify-center items-center text-white gap-3 text-2xl py-2"
                >
                  <FaTelegram />
                  <p>Telegram</p>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
