/* eslint-disable react/no-unescaped-entities */
import ResourceLink from "../common/ResourceLink";

function SocialDilemma() {
  return (
    <div className="space-y-4 leading-relaxed">
      <h3 className="heading-3 text-center"> The social dilemma </h3>

      <p>
        This “post” is quoted directly from{" "}
        <ResourceLink link="https://www.youtube.com/watch?v=uaaC57tcci0">
          The Social Dilemma movie{" "}
        </ResourceLink>{" "}
        which I think is a must-watch, so consider this a very brief summary of
        the information and ideas that have been presented in the movie.
      </p>

      <hr />

      <p>
        Whatever we do online, every single small action we take is being
        watched, tracked, measured, and carefully recorded. Social media
        companies know things about us that we might not even know. They know
        what you feel right now, what are you doing, whether you're an introvert
        or extrovert, and what is your personality type.
      </p>

      <p>
        Now we are in a situation that a couple hundreds of engineers have an
        amount of information about us in a way that has never been imagined in
        human history.
      </p>

      <p>
        Never before in history have 50 designers, 20 to 35 white guys in
        California, made decisions that would have an impact on two million
        people. Two million people would have thoughts that they didn't intend
        to have because a designer said: “This is how notifications work”.
      </p>

      <hr />

      <p>
        What those companies are doing with our data? they build models to
        predict our actions, and whoever has the best model, wins. <br /> Why
        predict our actions? to know exactly what advertisements to show us next
        that we are most likely going to engage with.
      </p>

      <p>
        Think about it, they measure our scrolling speed, our time spent looking
        at this photo, our time spent reading this post, what we search for, the
        clicks we have made, the videos we have watched, who we engage with,
        what content we like, when we open social media, how many times each
        day, and much much much more…
      </p>

      <p>
        I am 100% sure that the following scenario happened with you before, you
        are sitting with your friend, talking about a product you would like to
        buy or a place you would like to travel to, or whatever… Then once you
        open social media, you have content and advertisements that display the
        same thing you were thinking about.
      </p>

      <p>
        Well, have they hacked our brains? Of course not, it's simpler than
        that, they just KNEW what are you going to think about at this time
        exactly, based on everything else they have. But… the question is, are
        you sure that it's you who really thinks this way? is it really your
        decision?
      </p>
    </div>
  );
}

export default SocialDilemma;
