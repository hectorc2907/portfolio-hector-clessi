import { motion } from "framer-motion";
import { SocialMediaLinks } from "../../utils/SocialMediaLinks";

const FooterSocialMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-col items-center gap-5"
    >
      <h5 className="text-lg font-semibold">Redes Sociales:</h5>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 text-3xl">
        <p className="hover:text-slate-300">{SocialMediaLinks("LinkedIn")}</p>
        <p className="hover:text-slate-300">{SocialMediaLinks("Facebook")}</p>
        <p className="hover:text-slate-300">{SocialMediaLinks("Instagram")}</p>
        <p className="hover:text-slate-300">{SocialMediaLinks("Twitter")}</p>
        <p className="hover:text-slate-300">{SocialMediaLinks("WhatsApp")}</p>
        <p className="hover:text-slate-300">{SocialMediaLinks("Telegram")}</p>
      </div>
    </motion.div>
  );
};

export default FooterSocialMedia;
