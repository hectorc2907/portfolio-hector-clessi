import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center my-32 gap-5">
      <div>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
      </div>
      <div className="rounded-3xl">
        <img
          src="https://media.tenor.com/1Y42Mgr57SUAAAAM/this-is-fine.gif"
          alt="it's ok"
          className="rounded-3xl"
        />
      </div>
      <Link to="/">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex justify-center mt-4"
        >
          <div className="w-[250px] py-3 border shadow-sm hover:shadow-md hover:shadow-slate-300 flex justify-center items-center gap-2 text-xl">
            <p>Pagina Principal</p>
          </div>
        </motion.div>
      </Link>
    </section>
  );
};

export default PageNotFound;
