import { quotes } from "../../utils/constants";

function QuoteList() {
  return (
    <>
      {quotes.map((quote) => {
        return (
          <div
            key={quote.id}
            style={{ backgroundImage: `url(${quote.image})` }}
            className="min-h-[65dvh] w-full shrink-0 bg-cover bg-center"
          >
            <div className="flex min-h-[65dvh] px-8 items-center justify-center bg-black/70 text-white">
              <div className="max-w-5xl space-y-4 text-center">
                <p
                  style={{ wordSpacing: "5px" }}
                  className="font-merienda text-[clamp(1.75rem,3vw,2rem)] font-semibold uppercase leading-relaxed"
                >
                  &#x275D; {quote.quoteText} &#x275E;
                </p>
                <p className="text-right text-xl font-medium text-custom-yellow">
                  &mdash; {quote.author}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default QuoteList;
