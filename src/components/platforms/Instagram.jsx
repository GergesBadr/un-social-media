import ResourceLink from "../common/ResourceLink";

/* eslint-disable react/no-unescaped-entities */
function Instagram() {
  return (
    <div className="h-full overflow-y-auto bg-indigo-100 px-6 py-10 text-primary-dark lg:px-10">
      <h3 className="heading-3 underlined-word mx-auto w-fit">Instagram</h3>

      <div className="mt-8 space-y-3 leading-relaxed [&>p:last-child]:text-center">
        <p>
          Instagram is the most common platform that makes users feel miserable
          and unhappy after using it, if being used for long time.
        </p>

        <p>
          It's also the most common platform that
          <ResourceLink link="https://www.economist.com/graphic-detail/2018/05/18/how-heavy-use-of-social-media-is-linked-to-mental-illness?fsrc=scn/tw/te/bl/ed/?fsrc=scn/tw/te/bl/ed/howheavyuseofsocialmediaislinkedtomentalillnessdailycharts">
            affects our body image feeling{" "}
          </ResourceLink>{" "}
          Why? because most of its users live
          <ResourceLink link="https://www.youtube.com/watch?v=0EFHbruKEmw">
            An Insta Lie{" "}
          </ResourceLink>{" "}
          which is an intentionally false representation of real life on social
          media.
        </p>

        <p>
          Examples of an insta lie could include: Taking a million selfies
          before deciding on just one to post it. Going all the way to
          Starbucks, buying a coffee, opening up your MacBook, taking a photo of
          your workspace, closing your MacBook, and going back home. Using
          filters to edit your travel photos making them look unreal.
        </p>

        <p>
          We have to consider that there is a huge difference between the
          following two scenarios:
        </p>

        <p>
          <strong className="text-indigo-600">One: </strong>I lived a happy
          moment with friends or family or experienced something new and
          exciting to me, at the end of it, I decided to take a photo, to
          remember the moment and talk about it later with other friends or even
          share it on social media. That's totally fine and normal.
        </p>

        <p>
          <strong className="text-indigo-600">Two: </strong>I “created” the
          moment just to take the photo, I ordered this food to picture it not
          because I am hungry or want to eat it. I dressed like this not because
          of anything but to take a photo with my new look! now it has become a
          huge problem!
        </p>

        <p>
          <strong>
            &#x275D; We're a sad generation with happy pictures. &#x275E;
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Instagram;
