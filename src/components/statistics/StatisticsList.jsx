import { motion } from "framer-motion";
import { stats } from "../../utils/constants";
import StatisticsItem from "./StatisticsItem";

function StatisticsList() {
  return (
    <section className="bg-gradient-to-r from-pink-300/20 via-purple-300/40 to-indigo-400/20 py-24">
      <motion.h2
        className="heading-2 responsive-container mb-8 text-center"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 120, damping: 30 }}
        viewport={{ once: true, margin: "-275px" }}
      >
        Numbers Speak
        <span className="underlined-word font-bold uppercase tracking-widest">
          {" "}
          Louder{" "}
        </span>
        Than Words
      </motion.h2>

      <div className="responsive-container grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {stats.map((item, index) => {
          return <StatisticsItem key={item.id} item={item} index={index} />;
        })}
      </div>
    </section>
  );
}

export default StatisticsList;
