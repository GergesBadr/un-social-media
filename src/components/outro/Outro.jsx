/* eslint-disable react/no-unescaped-entities */
function Outro() {
  return (
    <section className="relative z-0 mt-24">
      {/* Bubbles */}
      <div className="bubble -top-8 left-4 lg:left-16 lg:top-8" />
      <div className="bubble -bottom-10 right-4 lg:bottom-0 lg:right-16" />

      {/* Header */}
      <div className="space-y-2 text-center">
        <h2 className="heading-2 underlined-word mx-auto w-fit">
          Before you go…
        </h2>
        <p className="text-lg text-gray-600">Finial thoughts.</p>
      </div>

      {/* Content */}
      <div className="responsive-container mt-6 space-y-6 text-lg leading-relaxed lg:mt-12 xl:mx-auto xl:max-w-6xl">
        <p>
          Okay, take a deep breath now, all of these things are overwhelming, I
          know, but if you spend some time trying to know more about the topic,
          you are a hero, there are a few things you have to consider before
          leaving this site now…
        </p>

        <p>
          When you quit social media (if you did), you will find much free time
          that you don't know what to do about, but it's okay, try to do
          something in this time, because if you don't, your brain will tell you
          to go back and continue consuming social media.
        </p>

        <p>
          It's a great opportunity to invest this free time into something
          useful. Think about what you want to do, find a new hobby, try to
          read, learn any musical instrument you like, travel somewhere, try
          something new, talk to new people, finish things you wanted to finish
          time ago, spend time with your friends and family, focus on your work
          and study, or spend time with yourself.
        </p>

        <p>
          Be sure that once you leave using social media, you never look back.
          So, make it a lifestyle, not just a 7 or 30-day experience.
        </p>

        <p>
          Want to see something interesting? go to YouTube and search for “Quit
          social media” for example, watch what other people felt after leaving
          social media, you will not find any negative feedback, no one will
          say: “Yes, I quit social media but I regret it, I should be using it
          again in the same way.”
        </p>

        <p>
          Now it's your turn to take action, below you will find out how to
          contact me, share your experience with me now, tell me everything you
          want, I will include it here, with your name if you want, to allow
          more people to know the results of quitting social media.
        </p>

        <p>
          <strong
            style={{ wordSpacing: "3px" }}
            className="bg-primary-dark p-1 uppercase tracking-wide text-custom-yellow"
          >
            Your experience is different, it might be an inspiration for someone
            else, so, share it with us now!
          </strong>
        </p>
      </div>
    </section>
  );
}

export default Outro;
