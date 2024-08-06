/* eslint-disable react/no-unescaped-entities */
import { comments } from "../../utils/constants";
import Post from "./Post";
import Fomo from "./Fomo";
import Hook from "./Hook";
import SocialDilemma from "./SocialDilemma";

function HowItWorks() {
  return (
    <section id="how-it-works" className="responsive-container relative my-16">
      <div className="mb-10 space-y-2 text-center">
        <h2 className="heading-2">
          <span className="underlined-word">Explanations…</span>
        </h2>
        <p className="text-lg text-gray-600">
          What's going on <br /> behind our screens?
        </p>
      </div>

      {/* Bubbles */}
      <div className="bubble -left-20 top-0" />
      <div className="bubble -right-20 bottom-0 hidden lg:block" />

      {/* Posts */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
        <Post
          postDate="3 days ago"
          likesNum={159}
          commentsNum={22}
          sharesNum={8}
          commentsList={comments.hookModel}
        >
          <Hook />
        </Post>

        <div className="space-y-4">
          <Post
            postDate="4 days ago"
            likesNum={347}
            commentsNum={4}
            sharesNum={16}
            commentsList={comments.socialDilemma}
          >
            <SocialDilemma />
          </Post>

          <Post
            postDate="2 days ago"
            likesNum={120}
            commentsNum={10}
            sharesNum={2}
            commentsList={comments.fomo}
          >
            <Fomo />
          </Post>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
