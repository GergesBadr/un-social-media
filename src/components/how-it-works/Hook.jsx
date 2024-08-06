/* eslint-disable react/no-unescaped-entities */
import ResourceLink from "../common/ResourceLink";
import hookedModel from "../../assets/images/more/the-hook-model.webp";

function Hook() {
  return (
    <div className="space-y-4 leading-relaxed">
      <img
        src={hookedModel}
        alt="illustration, four phases of the hooked model."
        loading="lazy"
        className="h-full w-full rounded-xl object-cover object-center shadow-md"
      />
      <h3 className="heading-3 mb-8 text-center">Hooked model</h3>
      <p>“Good design is one that you don’t even notice”</p>

      <p>
        Surprisingly enough, with every action we take every day, there is an
        illusion of choice, we think we have total control over our actions and
        make them voluntarily. Instead, if we look closely we would recognize
        that the world around us has been designed to interact with it
        effortlessly, and that makes sense!
      </p>

      <p>
        But not in terms of the internet and social media platforms, if those
        tools have been designed the same way, then as a result, we would
        overuse them. Notification sounds have been designed to grab our
        attention, the red color to alert us, etc…
      </p>

      <p>
        Each tool or object we use daily has one job to do, when it's done, we
        simply leave it and don't use it until we need it again, I am not going
        to use my keyboard unless I want to write something digitally, my cup
        unless I want to drink something, my dish unless I want to eat. It means
        that each object of those has a clear goal for everyone. But, think
        about it, what is Facebook's goal? what is Instagram's goal?
      </p>

      <p>
        There is something called the hook model, based on
        <ResourceLink link="https://www.goodreads.com/book/show/22668729-hooked?ac=1&from_search=true&qid=2pCmzac4dd&rank=2">
          the Hooked book by Nir Eyal{" "}
        </ResourceLink>{" "}
        the model tries to answer the question: “What makes the behavior become
        automatic, become a habit?” it's about how to create a manufacturing
        desire in your users to continue consuming your products, any product.
        It has four phases explained in the comments below…
      </p>
    </div>
  );
}

export default Hook;
