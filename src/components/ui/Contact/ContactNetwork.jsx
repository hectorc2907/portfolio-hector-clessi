import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactNetwork = () => {
  return (
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
        transition={{ duration: 1, delay: 1.3 }}
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
        transition={{ duration: 1, delay: 1.5 }}
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
        transition={{ duration: 1, delay: 1.7 }}
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
  );
};

export default ContactNetwork;
