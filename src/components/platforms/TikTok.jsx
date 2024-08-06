import ResourceLink from "../common/ResourceLink";

/* eslint-disable react/no-unescaped-entities */
function TikTok() {
  return (
    <div className="h-full overflow-y-auto bg-gray-900 px-6 py-10 text-white lg:px-10">
      <h3 className="heading-3 underlined-word mx-auto w-fit">Tiktok</h3>

      <div className="mt-8 space-y-3 leading-relaxed [&>p:last-child]:text-center">
        <p>
          TikTok is the king of short-form videos. Which effectively impacts our
          attention span and dopamine system. Its mindset makes everyone want to
          download and try it, whether as a viewer or a content creator.
        </p>

        <p>
          Remember that these short-form videos with first introduced in TikTok,
          then each other social media platform has also added it, obviously
          because it succeeded in TikTok. Snapchat added Streaks, YouTube added
          YouTube Shorts, and Instagram added Reels. All of these is a
          short-form content and a bullshit.
        </p>

        <p>
          Although it's not a new app, because TikTok has a history, it has a
          different name and so much has happened before it became the TikTok we
          know today. It was in the Coronavirus academic in 2020, that's the
          same year it became the most downloaded app.
        </p>

        <p>
          Have you ever wondered why China blocked TikTok? Yes,
          <ResourceLink
            link="https://www.nytimes.com/2024/04/25/business/china-tiktok-douyin.html"
            text="text-custom-yellow hover:text-custom-yellow/85"
          >
            TikTok has never been available in China{" "}
          </ResourceLink>{" "}
          They use a different app called Douyin, which is owned by ByteDance,
          the same company that owns TikTok, it has the same functionality and
          idea as TikTok, but uses different algorithms and business model,
          they're protecting their population, they have strict rules of child
          usage, and more… Is it a coincidence?
        </p>

        <p>
          Of all social media apps, TikTok is the most addictive, late
          statistics show that users spend about an hour and a half on the app
          daily.
        </p>

        <p>
          Want to deep dive into the TikTok world? Read
          <ResourceLink
            link="https://www.goodreads.com/book/show/205365140?ac=1&from_search=true&qid=drD9qXa1Yo&rank=1"
            text="text-custom-yellow hover:text-custom-yellow/85"
          >
            “TikTok Syndrome” Arabic book{" "}
          </ResourceLink>
        </p>

        <p>
          <strong>
            &#x275D; TikTok is no longer an app on our phones, it's our
            livelihood, it's how we communicate with our friends, and it's how
            we see the world. &#x275E;
          </strong>
        </p>
      </div>
    </div>
  );
}

export default TikTok;
