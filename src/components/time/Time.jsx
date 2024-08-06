import screenTime from "../../assets/images/more/screen-time.webp";
import stayFree from "../../assets/images/more/stayfree.webp";
import Callout from "./Callout";

function Time() {
  return (
    <section id="time" className="responsive-container">
      <div className="mx-auto max-w-6xl space-y-6">
        <h2 className="heading-2 text-center uppercase tracking-wider">
          Watch your <span className="underlined-word">time</span>
        </h2>

        <Callout>
          <p>
            Most of us underestimate the time we spend on social media daily,
            let’s prove it, answer yourself now and be honest, how much do you
            think you use social media daily?
          </p>
        </Callout>

        <div className="grid grid-cols-2 grid-rows-2 gap-6 lg:flex">
          <img
            src={screenTime}
            alt="Screenshot of iPhone mobile to the Screen Time setting."
            loading="lazy"
            className="row-end-1 m-auto h-[325px] max-w-[225px] sm:h-[375px] lg:m-0"
          />

          <div className="col-start-1 col-end-3 row-start-1 row-end-3 space-y-4">
            <Callout>
              <p>
                Now let&apos;s face the truth, to know your usage time, if you
                are using an iPhone, Go to Settings &gt; Screen Time &gt; Turn
                on App & Website Activity if you haven&apos;t already. (You
                should see the left screen)
              </p>
            </Callout>

            <Callout>
              <p>
                If you are using an Android, download a time tracker app like{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.burockgames.timeclocker&hl=en"
                  target="_blank"
                  className="font-medium text-indigo-400 underline"
                >
                  Stayfree App
                </a>{" "}
                (On the right screen), it will start to track your time, use it
                for about a week and check the results after this week, be
                honest with yourself, do not reduce your usage so that you get
                little time amount on the app!
              </p>
            </Callout>

            <Callout>
              <p>
                Do not be afraid if you find yourself spending too much time
                than you expected (which is properly the case!) instead of
                blaming yourself, let’s make a fast calculation, over the next
                10 years of your life, if you spend just 2 hours on social media
                daily, this will equal a total of 7300 hours (305 days) or
                in other words, almost{" "}
                <span className="uppercase text-custom-yellow">one year</span>.
                Which is 10% of the 10 years. Imagine spending 4 or 6 hours…
              </p>
            </Callout>
          </div>

          <img
            src={stayFree}
            alt="Screenshot of Stayfree app homepage."
            loading="lazy"
            className="row-end-1 m-auto h-[325px] max-w-[225px] sm:h-[375px] lg:m-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Time;
