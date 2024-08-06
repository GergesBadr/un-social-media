import OppositeScroll from "./OppositeScroll";

function Platforms() {
  return (
    <section id="platforms">
      <div className="responsive-container space-y-2 text-center">
        <h2 className="heading-2">
          Social media <span className="underlined-word">platforms</span>
        </h2>
        <p className="text-lg text-gray-600">
          Each platform is unique, they are using <br /> different methods, to
          achieve the same goal.
        </p>
      </div>

      <OppositeScroll />
    </section>
  );
}

export default Platforms;
