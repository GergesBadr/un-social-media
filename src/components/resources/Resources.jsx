import ResourcesList from "./ResourcesList";

/* eslint-disable react/no-unescaped-entities */
function Resources() {
  return (
    <section id="resources" className="mt-24">
      <div className="responsive-container mb-10 space-y-2 text-center">
        <h2 className="heading-2">
          Have another <span className="underlined-word">perspective</span>
        </h2>
        <p>
          See what professionals say about social media <br /> and what other
          people have experienced
        </p>
      </div>

      <ResourcesList />
    </section>
  );
}

export default Resources;
