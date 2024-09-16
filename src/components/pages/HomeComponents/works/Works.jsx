import WorkCard from "./WorkCard";

const Works = () => {
  return (
    <section className="bg-blue-600 text-white w-full py-12 flex justify-center px-2 xl:px-0">
      <div className="container">
        <h2 className="text-center text-4xl italic font-guerrilla">Works</h2>
        <WorkCard />
      </div>
    </section>
  );
};

export default Works;
