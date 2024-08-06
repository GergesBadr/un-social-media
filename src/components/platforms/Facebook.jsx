/* eslint-disable react/no-unescaped-entities */
import ResourceLink from "../common/ResourceLink";

function Facebook() {
  return (
    <div className="h-full overflow-y-auto bg-gray-900 px-6 py-10 text-white lg:px-10">
      <h3 className="heading-3 underlined-word mx-auto w-fit">Facebook</h3>

      <div className="mt-8 space-y-3 leading-relaxed [&>p:last-child]:text-center">
        <p>
          in 2004, Facebook was first published, being the first platform in all
          “social media” platforms, If you want to dive deep into the birthday
          of Facebook, watch
          <ResourceLink
            link="https://www.youtube.com/watch?v=lB95KLmpLR4"
            text="text-custom-yellow hover:text-custom-yellow/90"
          >
            The Social Network documentary movie{" "}
          </ResourceLink>
        </p>

        <p>
          Facebook has the biggest number of monthly active users, with{" "}
          <ResourceLink
            link="https://www.statista.com/statistics/272014/global-social-networks-ranked-by-number-of-users/"
            text="text-custom-yellow hover:text-custom-yellow/90"
            label="Facebook monthly active users"
          >
            more than 3 billion users{" "}
          </ResourceLink>{" "}
          Of course, with this number of users comes a massive amount of data,
          which is the biggest strength of Facebook. Other platforms can very
          effectively impact individuals, but Facebook can impact communities,
          and, wait for it, the whole world!
        </p>

        <p>
          With this amount of data, Facebook owners can, and they did,
          manipulate public opinion, incite violence against whoever they want
          to, or it can be a suited place for spreading fake news.
        </p>

        <p>
          Remember all the events you have witnessed yourself, Coronavirus or
          the Palestinian cause, in those recent events and more, there was a
          very obvious phenomenon, no one knew the fake news and the true one,
          Facebook owners prevented any content that supported the Palestinian
          cause as hard as they could, unfortunately, it's not the best time or
          place to talk in detail about these topics…
        </p>

        <p>
          Do you want to manipulate an election? Easy, go into a conspiracy
          theory group on Facebook, find 100 people who believe in some
          conspiracy theories, like the earth is flat, the landing on the moon
          wasn't true, etc… Tell Facebook to give you a thousand users who look
          like that. It will give you millions, not just thousands, good for
          you, now you can hit them with more conspiracy theories, and they
          would be more likely to believe you, because that's how they think,
          well, that's how Facebook made them think in the first place!
        </p>

        <p>
          Mark is very clever when it's related to embarrassing questions in
          interviews about Facebook, he knows how to not give clear answers and
          not put Facebook in a bad position.
          <ResourceLink
            link="https://www.youtube.com/watch?v=lwkA-S08f9Y"
            label="Mark interview with CNN"
            text="text-custom-yellow hover:text-custom-yellow/90"
          >
            In an interview with CNN{" "}
          </ResourceLink>{" "}
          he was asked directly: “Do you think deeply that Facebook impacted the
          results of the 2016 election?”, and again, his answer wasn’t clear, he
          simply said: “It's really hard for me to have a full assessment of
          that.” But we all know the truth now!
        </p>

        <p>
          <strong>
            &#x275D; If you want to control the population of your country,
            there has never been a tool as effective as Facebook. &#x275E;
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Facebook;
