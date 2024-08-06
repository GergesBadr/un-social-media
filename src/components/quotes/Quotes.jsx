import { motion } from "framer-motion";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { quotes } from "../../utils/constants";
import QuoteList from "./QuotesList";

function Quotes() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const threshold = 250;

    if (offset >= threshold && quoteIndex > 0) {
      setQuoteIndex((prev) => prev - 1);
    } else if (offset <= -threshold && quoteIndex < quotes.length - 1) {
      setQuoteIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        whileDrag={{ cursor: "grabbing" }}
        animate={{ translateX: `-${quoteIndex * 100}%` }}
        transition={{ type: "spring", mass: 3, stiffness: 500, damping: 60 }}
        className="flex cursor-grab items-center"
      >
        <QuoteList quoteIndex={quoteIndex} />
      </motion.div>

      <Controls quoteIndex={quoteIndex} setQuoteIndex={setQuoteIndex} />
    </section>
  );
}

function Controls({ quoteIndex, setQuoteIndex }) {
  const prevQuote = () => {
    if (quoteIndex > 0) {
      setQuoteIndex((pre) => pre - 1);
    }
  };

  const nextQuote = () => {
    if (quoteIndex < quotes.length - 1) {
      setQuoteIndex((pre) => pre + 1);
    }
  };

  return (
    <>
      {quoteIndex > 0 && (
        <button
          onClick={prevQuote}
          aria-label="Show prev quote"
          className="absolute left-8 top-8 z-[2] flex items-center justify-center rounded-full bg-neutral-200 p-3 shadow-md duration-200 hover:bg-white xl:top-1/2 xl:-translate-y-1/2"
        >
          <HiChevronLeft className="size-5 xl:size-7" />
        </button>
      )}

      {quoteIndex !== quotes.length - 1 && (
        <button
          onClick={nextQuote}
          aria-label="Show next quote"
          className="absolute right-8 top-8 z-[2] flex items-center justify-center rounded-full bg-neutral-200 p-3 shadow-md duration-200 hover:bg-white xl:top-1/2 xl:-translate-y-1/2"
        >
          <HiChevronRight className="size-5 xl:size-7" />
        </button>
      )}
    </>
  );
}

export default Quotes;
