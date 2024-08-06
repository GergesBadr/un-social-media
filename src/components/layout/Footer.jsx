import ResourceLink from "../common/ResourceLink";

function Footer() {
  return (
    <footer className="relative mt-[275px] bg-indigo-800 py-20 text-white before:absolute before:left-0 before:top-[-400px] before:z-[-1] before:h-[400px] before:w-full before:bg-[url(./assets/images/layered-waves.svg)]">
      <div className="responsive-container space-y-3 text-center text-lg">
        <p>
          Built from scratch by me,
          <ResourceLink
            link="https://www.gergesbadr.com/home"
            text="text-custom-yellow"
          >
            Gerges Badr
          </ResourceLink>
          , A developer who hates social media!
        </p>

        <p className="text-gray-300">
          (While listening to
          <ResourceLink
            link="https://www.youtube.com/watch?v=k1BneeJTDcU"
            text="text-custom-yellow"
            label="Welcome to the internet song on YouTube"
          >
            Welcome to the internet
          </ResourceLink>{" "}
          for a thousand times!)
        </p>
      </div>
    </footer>
  );
}

export default Footer;
