import { HiInformationCircle } from "react-icons/hi2";
import { introductionText } from "../../utils/constants";

function Definition() {
  return (
    <section className="responsive-container space-y-14">
      {/* illustrations */}
      <div className="absolute -top-64 left-8 hidden size-[275px] bg-[url(./assets/images/illustrations/illustration1.webp)] bg-cover bg-center lg:block" />
      <div className="absolute -top-72 right-8 hidden size-[275px] bg-[url(./assets/images/illustrations/illustration2.webp)] bg-cover bg-center lg:block" />

      {/* Content */}
      <h2 className="heading-2 text-center uppercase tracking-wider">
        What is <span className="underlined-word">social-media?</span>
      </h2>

      <div className="grid grid-cols-1 gap-8 text-lg md:gap-14 lg:grid-cols-2">
        {introductionText.map((columns) => {
          return (
            <div
              key={columns.id}
              className={`flex h-fit flex-col items-center gap-10 border-custom-yellow ${columns.id === 1 ? "border-l-4 pl-4" : "border-r-4 pr-4 lg:border-l-4 lg:border-r-0 lg:pl-4 lg:pr-0"}`}
            >
              {columns.content.map((columnText) => {
                return (
                  <div key={columnText.id} className="flex items-start gap-3">
                    <HiInformationCircle className="size-8 shrink-0 text-custom-yellow" />
                    {columnText.text}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Definition;
