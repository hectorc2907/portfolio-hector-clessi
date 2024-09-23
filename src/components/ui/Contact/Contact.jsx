import { useState } from "react";
import { motion } from "framer-motion";
import ContactTitle from "./ContactTitle";
import ContactEmail from "./ContactEmail";
import ContactNetwork from "./ContactNetwork";

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
      <section id="contact" className="px-5 py-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container border p-5 px-2 md:px-5 border-blue-900 rounded-2xl shadow-md grid grid-cols-1 gap-5"
        >
          <ContactTitle />
          <div className="flex flex-col items-center gap-10">
            <ContactEmail isCopy={isCopy} handleCopyEmail={handleCopyEmail} />
            <ContactNetwork />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
