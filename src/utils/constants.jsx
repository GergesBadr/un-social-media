/* eslint-disable react/no-unescaped-entities */
import {
  HiOutlineClock,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineFaceFrown,
  HiOutlineMagnifyingGlass,
  HiOutlineHeart,
} from "react-icons/hi2";
import ResourceLink from "../components/common/ResourceLink";

// Resources images
import resource1 from "../assets/images/resources/resource-1.webp";
import resource2 from "../assets/images/resources/resource-2.webp";
import resource3 from "../assets/images/resources/resource-3.webp";
import resource4 from "../assets/images/resources/resource-4.webp";
import resource5 from "../assets/images/resources/resource-5.webp";
import resource6 from "../assets/images/resources/resource-6.webp";
import resource7 from "../assets/images/resources/resource-7.webp";
import resource8 from "../assets/images/resources/resource-8.webp";
import resource9 from "../assets/images/resources/resource-9.webp";
import resource10 from "../assets/images/resources/resource-10.webp";
import resource11 from "../assets/images/resources/resource-11.webp";
import resource12 from "../assets/images/resources/resource-12.webp";
import resource13 from "../assets/images/resources/resource-13.webp";
import resource14 from "../assets/images/resources/resource-14.webp";
import resource15 from "../assets/images/resources/resource-15.webp";
import resource16 from "../assets/images/resources/resource-16.webp";
import resource17 from "../assets/images/resources/resource-17.webp";
import resource18 from "../assets/images/resources/resource-18.webp";
import resource19 from "../assets/images/resources/resource-19.webp";
import resource20 from "../assets/images/resources/resource-20.webp";
import resource21 from "../assets/images/resources/resource-21.webp";

// Quotes images
import heart from "../assets/images/quotes/heart.webp";
import keyboard from "../assets/images/quotes/keyboard.webp";
import model from "../assets/images/quotes/model.webp";
import phone from "../assets/images/quotes/phone.webp";
import people from "../assets/images/quotes/people.webp";

export const navLinks = [
  { id: 1, to: "#how-it-works", name: "How it works" },
  { id: 2, to: "#problems", name: "Problems" },
  { id: 3, to: "#platforms", name: "Platforms" },
  { id: 4, to: "#solutions", name: "Solutions" },
  { id: 5, to: "#resources", name: "Resources" },
];

export const stats = [
  {
    id: 1,
    icon: <HiOutlineClock className="size-12" />,
    numberPrefix: "+",
    number: 145,
    numberSuffix: " Min",
    link: "https://www.statista.com/statistics/433871/daily-social-media-usage-worldwide/",
    desc: "Individually average daily social media usage worldwide as of 2024.",
  },

  {
    id: 2,
    icon: <HiOutlineClock className="size-12" />,
    numberPrefix: "+",
    number: 4.8,
    numberSuffix: " Hours",
    link: "https://news.gallup.com/poll/512576/teens-spend-average-hours-social-media-per-day.aspx",
    desc: "Teens daily social media usage (A more accurate study than the global one.)",
  },

  {
    id: 3,
    icon: <HiOutlineGlobeAsiaAustralia className="size-12" />,
    numberPrefix: "+",
    number: 5.07,
    numberSuffix: " Billion",
    link: "https://www.statista.com/statistics/617136/digital-population-worldwide/",
    desc: "All social media users worldwide as of April 2024.",
  },

  {
    id: 4,
    icon: <HiOutlineFaceFrown className="size-12" />,
    numberPrefix: "+",
    number: 30,
    numberSuffix: "%",
    link: "https://cyberbullying.org/facts#:~:text=Overall%2C%20about%2030%25%20of%20the,30%20days%20preceding%20the%20survey.",
    desc: "Of young people have been bullied online at some point in their lifetimes.",
  },

  {
    id: 5,
    icon: <HiOutlineHeart className="size-12" />,
    numberPrefix: "+",
    number: 40,
    numberSuffix: "%",
    link: "https://swgfl.org.uk/topics/social-media/how-can-social-media-affect-body-image/#:~:text=Using%20more%20social%20media%20has,relation%20to%20their%20body%20image.",
    desc: "Of young people worry in relation to their body image because of social media.",
  },

  {
    id: 6,
    icon: <HiOutlineMagnifyingGlass className="size-12" />,
    numberPrefix: "-",
    number: 8,
    numberSuffix: " Seconds",
    link: "https://worldmetrics.org/social-media-attention-span-statistics/#:~:text=%22The%20average%20attention%20span%20of,media%20is%20about%208%20seconds.%22",
    desc: "The average attention span for a social media user.",
  },
];

export const conversationOne = [
  {
    id: 1,
    dir: "left",
    text: "Welcome to the internet 🌎🌎",
    time: "09:41 AM",
  },

  {
    id: 2,
    dir: "left",
    text: "Have a look around 👀, anything that brain of yours can think of can be found.",
    time: "09:42 AM",
  },

  {
    id: 3,
    dir: "left",
    text: "We've got mountains of content. Some better, some worse…",
    time: "09:43 AM",
  },

  {
    id: 4,
    dir: "left",
    text: "If none of it's of interest to you, you'd be the first. 🎉",
    time: "09:44 AM",
  },
];

export const conversationTwo = [
  {
    id: 1,
    dir: "left",
    text: "Could I interest you in everything?",
    time: "09:41 AM",
  },

  {
    id: 2,
    dir: "left",
    text: "All of the time? ⏳",
    time: "09:42 AM",
  },

  {
    id: 3,
    dir: "right",
    text: "A little bit of everything…",
    time: "09:43 AM",
  },

  {
    id: 4,
    dir: "right",
    text: "All of the time. 😉",
    time: "09:44 AM",
  },
];

export const conversationThree = [
  {
    id: 1,
    dir: "left",
    text: "Just nod or shake your head and we'll do the rest. 🔮🧙‍♂️",
    time: "09:41 AM",
  },

  {
    id: 2,
    dir: "right",
    text: "What have you got?",
    time: "09:42 AM",
  },

  {
    id: 3,
    dir: "left",
    text: "We got movies, doctors, and fantasy sports… ",
    time: "09:43 AM",
  },

  {
    id: 4,
    dir: "left",
    text: "Here's a tip for straining pasta, here's a nine-year-old who died!",
    time: "09:44 AM",
  },
];

export const introductionText = [
  {
    id: 1,
    content: [
      {
        id: 1,
        text: (
          <p>
            Despite how necessary we feel social media is, let's go back to the
            basics, it's just an entertainment product, not more, not less.
          </p>
        ),
      },
      {
        id: 2,
        text: (
          <p>
            For people who run it, it's just business, they want to earn as much
            as possible. So, all they need is more minutes of your attention,
            and some bytes of your personal data. And they know how to translate
            it into money!
          </p>
        ),
      },
      {
        id: 3,
        text: (
          <p>
            "Behind every screen on your phone, there are generally a thousand
            engineers that have worked on this thing to try to make it maximally
            addicting."
          </p>
        ),
      },
    ],
  },

  {
    id: 2,
    content: [
      {
        id: 1,
        text: (
          <p>
            Our generation is the most generation in history who suffer from
            diseases such as <span className="text-custom-yellow">Stress</span>,{" "}
            <span className="text-custom-yellow">Anxiety</span>,{" "}
            <span className="text-custom-yellow">Depression</span>, and{" "}
            <span className="text-custom-yellow">Lack of attention span.</span>{" "}
            That's actually because of different factors, but we can't deny that
            social media is the most important one.
          </p>
        ),
      },
      {
        id: 2,
        text: (
          <p>
            The problem is that we are not ready yet for all of the madness of
            social media, our brains are not designed to handle this amount of
            information, and this way of distraction.
          </p>
        ),
      },
      {
        id: 3,
        text: (
          <p>
            Everyone who has had a role in this tech industry has done their
            work perfectly. They designed these products in a way so that you
            simply stay using them as much as possible. They created a{" "}
            <span className="text-custom-yellow">Masterpiece</span>, but in a
            bad way.
          </p>
        ),
      },
    ],
  },
];

export const problems = [
  {
    id: 1,
    title: "Short-form videos",
    desc: (
      <>
        <p>
          It's <strong className="underlined-word">the most engaging</strong>{" "}
          type of content on social media.
          <ResourceLink
            withIcon={true}
            label="the most engaging content on social media statistic"
            link="https://www.statista.com/statistics/1273876/content-social-media-marketing-usa/"
          />{" "}
          And that's one of the biggest problems we face today in terms of
          social media
        </p>
        <p>
          Because that one, destroys our attention span, two, plays with our
          dopamine levels, three we simply do not get a single small piece of
          information from it, in other words, after watching 30 short videos we
          will forget what we watched already!
        </p>
        <p>
          We have a dilemma now about our generation suggesting that most of us
          <strong className="underlined-word"> get bored</strong> while reading
          a book, reading a long or complicated article, or even watching a
          movie! which is entertainment time itself, but a long one.
        </p>
        <p>
          So, if we get bored and always check our mobile phones while sitting
          with families and friends, what about our learning and working? could
          we achieve something we are proud of while we have this{" "}
          <strong className="underlined-word">monkey mind</strong> around?
        </p>
      </>
    ),
  },

  {
    id: 2,
    title: "Low-quality content",
    desc: (
      <>
        <p>
          You are working/studying/doing anything important or needs your
          attention, but you are not really focused, you opened a social media
          platform but you didn't recognize why or when, you just did…
        </p>
        <p>
          Watched a video, another one, and another one… and voila, you spent
          +30 mins in nothing! why it's nothing? because it was low-quality
          content, it's <strong className="underlined-word">superficial</strong>
          , and it lacks depth, accuracy, and any value to you.
        </p>
        <p>
          Now, 90% of content creators, unfortunately, have the mind of{" "}
          <strong className="underlined-word">quantity over quality</strong>,
          simply to earn more, to be famous more and faster. Too many Reels,
          TikToks, Stories, Shorts, Streaks, etc… and we consume this
          low-quality content!
        </p>
      </>
    ),
  },

  {
    id: 3,
    title: "Dopamine",
    desc: (
      <>
        <p>
          Our brain secretes dopamine to give us feelings like pleasure,
          satisfaction, and motivation, and it's also involved in the brain
          reward system and{"  "}
          <strong className="underlined-word">addiction.</strong> The problem is
          it's also secreted while using social media, meaning that our brain
          connects between using social media and, you say it, yep, addiction!
        </p>
        <p>
          Don't see a pattern here? that's the same problem with drugs,
          pornography, gambling, and almost any other sort of{" "}
          <strong className="underlined-word">addiction.</strong> Too much time
          on social media can <strong className="underlined-word">raise</strong>{" "}
          the level of dopamine in our brains
        </p>
        <p>
          And that makes real life boring and not interesting anymore,
          everything becomes ordinary because we always watching more
          interesting things!
        </p>
        <p>
          Now, when one of us buys new clothes or does anything new, if 3 of our
          friends positively express their feelings, in general, that should be
          amazing, instead,{" "}
          <strong className="underlined-word">it won't be enough</strong>, we
          need our photos to get 500 likes and 200 comments saying their opinion
          about me so that I could be satisfied!
        </p>
      </>
    ),
  },

  {
    id: 4,
    title: "Infinite scroll",
    desc: (
      <>
        <p>
          In 2006, Aza Raskin invented the infinite scroll feature, before this
          time, there was no infinite scroll like today, there was a fixed
          amount of content displayed on the homepage of social media platforms
          or search engines like Google, and when the user gets to the bottom,
          they see a <strong className="underlined-word">pagination</strong>{" "}
          with pages numbers to go to next or previous page.
        </p>
        <p>
          The most impressive thing about it is based on the concept of the{" "}
          <strong className="underlined-word">Surprise</strong>, in ourselves,
          we keep scrolling because we “Wish” or “Think” that the next content
          is going to be more interesting, more satisfying, and better by any
          means.
        </p>
        <p>
          But that's simply an illusion, and if we keep thinking like this we
          will never stop scrolling because it's simply endless, we will still
          think that the next content might give us another
          <ResourceLink withIcon={true} link="https://www.theguardian.com/global/2021/aug/22/how-digital-media-turned-us-all-into-dopamine-addicts-and-what-we-can-do-to-break-the-cycle">
            Dopamine Hit{" "}
          </ResourceLink>
        </p>
        <p>
          Endless scrolling has the ability to remove any signs of completion,
          because we will not even feel how much content we consumed, and it
          leads to a feeling of incompleteness, forcing us to just keep
          scrolling, that's the same logic behind the{" "}
          <strong className="underlined-word">slot machine</strong> in gambling.
        </p>
      </>
    ),
  },

  {
    id: 5,
    title: "Attention span",
    desc: (
      <>
        <p>
          Attention itself is how we decide to use/spend our mental energy.
          Imagine that you are in a dark room and have a flashlight, wherever
          the flashlight is pointing, your attention will be. According to
          <ResourceLink
            label="Wikipedia attention span article"
            link={`https://en.wikipedia.org/wiki/Attention_span#:~:text=Attention%20span%20is%20the%20amount,to%20another%20activity%20or%20sensation`}
          >
            Wikipedia{" "}
          </ResourceLink>
          "attention span is the amount of time spent concentrating on a task
          before becoming{" "}
          <strong className="underlined-word"> distracted.</strong>"
        </p>
        <p>
          And if this amount now with many people is very short, only about 8
          seconds (check out the resource up) then obviously It's the main
          reason why we simply can't sit down and be productive, we can't focus
          hard enough on the task at hand.
        </p>
        <p>
          Do you think it's possible to focus for a long time while tens of {""}
          <strong className="underlined-word">notifications</strong> are coming
          from our phone that's near us? Our brains can't catch up with the
          amount of information on our phones that we consume in a very short
          time!
        </p>
        <p>
          It’s not a coincidence that when we get bored (we get bored frequently
          because of our overuse of social media, yes it's a loop…), the first
          thing we do is to check our phone, our internet, and our social media
          specifically, to see if there is anything new or interesting that we
          didn't watch or see yet.
        </p>
      </>
    ),
  },
];

export const comments = {
  hookModel: [
    {
      id: 1,
      name: "John Doe",
      content: (
        <div className="space-y-4">
          <p>Phase one, Trigger: </p>
          <p>
            It's the start of the circle, an external (or internal) trigger is
            any sort of simulation that promotes a customer to start using the
            product. For example, when we hear a notification sound, when a
            friend sends us a link, etc…
          </p>
        </div>
      ),
      date: "14 h",
    },
    {
      id: 2,
      name: "Also John Doe",
      content: (
        <div className="space-y-4">
          <p>Phase Two, Action: </p>
          <p>
            The action is what customers do in response to the trigger. If the
            action was hearing a notification sound, the action is going to be
            clicking it and see what is it about.
          </p>
        </div>
      ),
      date: "14 h",
    },
    {
      id: 3,
      name: "Well, Another John Doe!",
      content: (
        <div className="space-y-4">
          <p>Phase Three, Variable reward:</p>
          <p>
            The product rewards its customers after completing an action,
            variability of the reward is crucial to the hook model because it's
            not just a reward, it's an unknown reword. Meaning that we will
            never know what will come up, whether it's sad or funny, has
            information or not, we care about it or not, etc…
          </p>
        </div>
      ),
      date: "14 h",
    },
    {
      id: 4,
      name: "Last John Doe",
      content: (
        <div className="space-y-4">
          <p>Phase Four, Investment :</p>
          <p>
            After experiencing pleasure from the reward, customers should be
            encouraged to make an investment, like uploading an image, sharing a
            post, reacting with some content, or in other words, engaging with
            the product by any means.
          </p>
        </div>
      ),
      date: "14 h",
    },
    {
      id: 5,
      name: "I have no name.",
      content: (
        <div className="space-y-4">
          <p>
            A good company will make its customers doesn't need an external
            trigger anymore to use their products, instead, it will be an
            internal trigger. When we wake up, and the first thing we do is
            scrolling on Facebook or Instagram, the trigger here is not a push
            notification, it's us who wants to follow up and see what's going on
            or connect with friends or whatever.
          </p>
          <p>
            The more the hook cycles we get ourselves into, the more likely it
            will become a habit.
          </p>
        </div>
      ),
      date: "14 h",
    },
  ],

  fomo: [
    {
      id: 1,
      name: "John Doe's brother 👀",
      content: (
        <div>
          I am talking from experience, if we limit our social media usage or
          even delete them at all, we will never miss out anything, it's just an
          illusion, there are a million different ways to know what we want to
          know instead of spending +5 hours scrolling on social media daily.
        </div>
      ),
      date: "16 h",
    },
    {
      id: 2,
      name: "Last but not least",
      content: (
        <div>
          I have an amazing resource to contribute with, check out this{" "}
          <ResourceLink link="https://www.youtube.com/watch?v=1mZAQC9djPE">
            YouTube video about FOMO - the fear of missing out: Bobby Mook at
            TEDx{" "}
          </ResourceLink>
        </div>
      ),
      date: "16 h",
    },
  ],

  socialDilemma: [
    {
      id: 1,
      name: "You should go watch the movie",
      content: (
        <div>
          Because we don't pay for the products we use, advertisers who pay, so,
          advertisers are the customers, we're the thing that being sold. You
          might ask, why do advertisers pay for those companies? that's in
          exchange for showing their ads to us.
        </div>
      ),
      date: "10 h",
    },

    {
      id: 2,
      name: "John Doe",
      content: (
        <div>
          If something is a tool, it would simply be sitting there, waiting
          patiently, if something is not a tool, it's demanding things from you,
          seducing you, manipulating you, it wants things from you. we've moved
          away from having a tools-based technology environment to an addiction
          and manipulation-based technology environment. Social media isn't a
          tool that's waiting to be used, it has its own goals and its own means
          of pursuing them by using our psychology against us!
        </div>
      ),
      date: "12 h",
    },

    {
      id: 3,
      name: "John Doe x2",
      content: (
        <div>
          We evolved to care about whether other people in our tribe think well
          of us or not, because it matters. But have we evolved to be aware of
          what 10 thousands of people think of us? We were not evolved to have
          social approval being dosed to us every 5 minutes, we should not
          experience something like that.
        </div>
      ),
      date: "13 h",
    },
  ],
};

export const quotes = [
  {
    id: 1,
    quoteText:
      "Social media isn't a tool that's just waiting to be used. It has its own goals, and its own means of pursuing them.",
    author: "Tristan Harris",
    image: phone,
  },
  {
    id: 2,
    quoteText:
      "How do we wake up from the matrix when we don't know we are in the matrix?",
    author: "Tristan Harris",
    image: model,
  },
  {
    id: 3,
    quoteText:
      "Social media is about sociology and psychology more than technology.",
    author: "Brian Solis.",
    image: keyboard,
  },
  {
    id: 4,
    quoteText:
      "There are two industries that call their customers 'users': illegal drugs and software.",
    author: "Edward Tufte",
    image: heart,
  },
  {
    id: 5,
    quoteText: "Social media doesn't create negativity, it uncovers it.",
    author: "Joe Baer",
    image: people,
  },
];

export const solutions = [
  {
    id: 1,
    title: "Awareness",
    bgColor: "#4f46e5",
    content: (
      <>
        <p>
          We can't solve a problem unless we know it very well and admit that it
          needs to be solved. So,{" "}
          <strong className="text-custom-yellow">
            {" "}
            <i>being aware of our social media usage</i>{" "}
          </strong>{" "}
          can help us take the first needed action.
        </p>
        <p>
          As discussed in the{" "}
          <a href="#time" className="font-semibold underline">
            Time Section
          </a>{" "}
          use your iPhone settings, or on Android use the Stayfree app or any
          other time tracker app you like,{" "}
          <strong className="text-custom-yellow">
            {" "}
            <i>to know exactly your usage details</i>{" "}
          </strong>
          , including:
        </p>
        <p>
          how many hours do you use social media, and when exactly? what is your
          most-used app? how many times have you clicked on an app on that day
          (that's important, continue reading to understand why), on so much
          more…
        </p>
      </>
    ),
  },

  {
    id: 2,
    title: "Less triggers",
    bgColor: "#4338ca",
    content: (
      <>
        <p>
          At the “Hook Model”, we discussed the triggers that have been designed
          to grab our attention to consuming more social media. But fortunately,
          it's a double-edged sword, we can use it in our favor.
        </p>
        <p>
          So,
          <strong className="text-custom-yellow">
            {" "}
            <i>turn off the notifications</i>
          </strong>{" "}
          for most of the apps that you consume a lot, only keep the important
          ones, like WhatsApp or email notifications if your work depends on
          that, apart from that, any notification you receive from Facebook,
          Instagram, or TikTok, etc… is definitely not that important and does
          not worth your distraction and you can deal with it later.
        </p>
        <p>This will allow you to take the action, not them.</p>
        <p>
          Also,{" "}
          <strong className="text-custom-yellow">
            {" "}
            <i>disable the “Badge Notifications”</i>{" "}
          </strong>{" "}
          for all social media apps, it's this rounded red dot that displays the
          number of notifications you haven't read yet in the app. We know now
          why they used the “red” color exactly, to alert you, to tell you that
          an urgent something is happening now and you should see it!{" "}
        </p>
        <p>
          This will reduce how many times you click on the apps, therefore, the
          total usage time.
        </p>
      </>
    ),
  },

  {
    id: 3,
    title: "Make it hard",
    bgColor: "#3730a3",
    content: (
      <>
        <p>
          As much as possible, they are trying to make your experience easy
          before and while using those apps, so, if our intention is the
          opposite of theirs, we simply need to make it hard. This can achieved
          in many ways:
        </p>
        <ul className="list-inside list-decimal space-y-3 marker:font-semibold marker:text-custom-yellow">
          <li>
            <strong className="text-custom-yellow">
              {" "}
              <i> Reorder the apps </i>{" "}
            </strong>
            , do not put social media apps on the home screen, instead gather
            all of them in one folder and put it in a hard place to find, you
            can also name the folder a negative name like: “Time Waste” so that
            when you read it you remind yourself with everything we talked
            about.
          </li>
          <li>
            Using a time tracker app,{" "}
            <strong className="text-custom-yellow">
              {" "}
              <i> add a usage limit </i>{" "}
            </strong>{" "}
            for the apps, this will force you to use the app only for the time
            you specified daily, for example, one hour or 30 mins. After this
            time, you won't be able to use the app again at the end of the day.
            (Unless you delete the usage limit)
          </li>
          <li>
            You can also{" "}
            <strong className="text-custom-yellow">
              {" "}
              <i> add a session limit </i>{" "}
            </strong>
            , this will allow you to specify the maximum amount of time you want
            to spend on the app “each session” or for every time you open it.
            This can help against the problem of infinite scrolling and the fact
            that we don't realize how much time we spent scrolling until now…
          </li>
        </ul>
      </>
    ),
  },

  {
    id: 4,
    title: "Have a nice day",
    bgColor: "#312e81",
    content: (
      <>
        <p>
          <strong className="">
            <i>
              Never use your mobile phone at the start or the end of the day.{" "}
            </i>
          </strong>
          Put it far from your bed so that you don't use it after waking up
          immediately, despite the physical damage it causes, like hurting your
          eyes and so on, it also hurts your mental health.
        </p>
        <p>
          We really don't need to follow up about everything going on around us,
          that's false or negative knowledge/seeing because we can't interact
          with it, we can't take any action towards it. It makes us negative
          viewers, we just consume, we don't contribute to it, we don't have any
          impact.
        </p>
        <p>
          So, seeing news like: “A man who killed his child… Economic crisis in
          a country… Harassment crime happened in…” can definitely make your day
          bad before it even starts, it can make you start your day miserable
          and sad and stay like this all the day!
        </p>
      </>
    ),
  },

  {
    id: 5,
    title: "Be strict",
    bgColor: "#1e1b4b",
    content: (
      <>
        <p>
          The best way I would like to deal with social media is to use it and
          get what I want to get then immediately get out! To achieve it and not
          get distracted from the news feed or anything else, You can use only
          your PC or Laptop with social media, not a smartphone. Install the
          <ResourceLink
            link="https://chromewebstore.google.com/detail/news-feed-eradicator/fjcldmjmjhkklehbacihaiopjklihlgg"
            text="text-custom-yellow hover:text-custom-yellow/90"
          >
            News Feed Eradicator Extension{" "}
          </ResourceLink>{" "}
          in your browser, this will delete the news feed from social media
          websites, allowing you to go, do whatever you really want to, and
          leave.
        </p>
        <p>
          That's a good trick because we simply can't fight all of those
          algorithms and designs and the big tech companies with our willpower
          only, that would be a non-fair fight. We can't say that: I am aware of
          the dark side of social media, but I am just going to use it for a
          short time… that's a lie, you won't. So, get help from something else,
          like the tools we already mentioned.
        </p>
        <p>
          Consider deactivating or even deleting your social media accounts,
          maybe for some apps, not all of them. That's one of the strictest
          actions you can take. Be sure that after doing so, you won't miss
          anything, you won't be bored, you won't lose entertainment or anything
          like that…
        </p>
      </>
    ),
  },
];

export const resourcesRowOne = [
  {
    id: 1,
    imgSrc: resource1,
    imgAlt: "The social dilemma movie trailer",
    youtube: "https://www.youtube.com/watch?v=uaaC57tcci0",
    important: true,
  },
  {
    id: 2,
    imgSrc: resource2,
    imgAlt: "The social network movie trailer",
    youtube: "https://www.youtube.com/watch?v=lB95KLmpLR4",
  },
  {
    id: 3,
    imgSrc: resource3,
    imgAlt: "Is social media hurting your mental health? Bailey Parnell, TEDx",
    youtube: "https://www.youtube.com/watch?v=Czg_9C7gw0o",
  },
  {
    id: 4,
    imgSrc: resource4,
    imgAlt:
      "After a few minutes of social media, this happens. Neuroscientist Andrew Huberman",
    youtube: "https://www.youtube.com/watch?v=Zh-AcF_4Hao",
  },
  {
    id: 5,
    imgSrc: resource5,
    imgAlt: "The man who invented infinite scrolling, Joe Rogan",
    youtube: "https://www.youtube.com/watch?v=rQCPqnocCfs",
    important: true,
  },
  {
    id: 6,
    imgSrc: resource6,
    imgAlt: "Quit social media, Dr Cal Newport, TEDx",
    youtube: "https://www.youtube.com/watch?v=3E7hkPZ-HTk",
  },
  {
    id: 7,
    imgSrc: resource7,
    imgAlt: "FOMO, the fear of missing out, Bobby Mook, TEDx",
    youtube: "https://www.youtube.com/watch?v=1mZAQC9djPE",
  },
];

export const resourcesRowTwo = [
  {
    id: 8,
    imgSrc: resource8,
    imgAlt: "The psychological tricks keeping you online",
    youtube: "https://www.youtube.com/watch?v=z3TJPyHqadY",
  },
  {
    id: 9,
    imgSrc: resource9,
    imgAlt: "The science behind TikTok brain",
    youtube: "https://www.youtube.com/watch?v=JcB2RsHJZhw",
  },
  {
    id: 10,
    imgSrc: resource10,
    imgAlt: "How to actually stop scrolling",
    youtube: "https://www.youtube.com/watch?v=_GohNBxyMPk",
  },
  {
    id: 11,
    imgSrc: resource11,
    imgAlt: "The battle for your time, Dino Ambrosi, TEDx",
    youtube: "https://www.youtube.com/watch?v=4TMPXK9tw5U",
    important: true,
  },
  {
    id: 12,
    imgSrc: resource12,
    imgAlt:
      "How a handful of tech companies control billions of minds every day, Tristan Harris, TEDx",
    youtube: "https://www.youtube.com/watch?v=C74amJRp730",
    important: true,
  },
  {
    id: 13,
    imgSrc: resource13,
    imgAlt: "The untold truth of Instagram",
    youtube: "https://www.youtube.com/watch?v=6jv98VfM3vQ",
    important: true,
  },
  {
    id: 14,
    imgSrc: resource14,
    imgAlt: "Are you living an Insta lie? social media VS reality",
    youtube: "https://www.youtube.com/watch?v=0EFHbruKEmw",
  },
];

export const resourcesRowThree = [
  {
    id: 15,
    imgSrc: resource15,
    imgAlt: "The unknown danger behind social media, Arabic",
    youtube: "https://www.youtube.com/watch?v=uA5F2qVzPGo",
    important: true,
  },
  {
    id: 16,
    imgSrc: resource16,
    imgAlt: "Digital minimalism, Arabic",
    youtube: "https://www.youtube.com/watch?v=llrLawTDN38",
    important: true,
  },
  {
    id: 17,
    imgSrc: resource17,
    imgAlt: "The Mid content, Arabic",
    youtube: "https://www.youtube.com/watch?v=4H_Fv1mcZOM",
  },
  {
    id: 18,
    imgSrc: resource18,
    imgAlt: "Why you addict to social media, Arabic",
    youtube: "https://www.youtube.com/watch?v=4k_op3TP9xg",
  },
  {
    id: 19,
    imgSrc: resource19,
    imgAlt: "Instagram paradox, Arabic",
    youtube: "https://www.youtube.com/watch?v=Y6UB2N6T9tk",
    important: true,
  },
  {
    id: 20,
    imgSrc: resource20,
    imgAlt: "The lie of technology world, Arabic",
    youtube: "https://www.youtube.com/watch?v=NcDIiolWDT0",
  },
  {
    id: 21,
    imgSrc: resource21,
    imgAlt: "45 Days without Facebook, Arabic",
    youtube: "https://www.youtube.com/watch?v=ux5w5pTzgTc",
  },
];
