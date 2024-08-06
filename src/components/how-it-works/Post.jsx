import {
  HiEllipsisHorizontal,
  HiOutlineChatBubbleOvalLeft,
  HiHeart,
} from "react-icons/hi2";
import { BiSolidLike } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { PiShareFatLight } from "react-icons/pi";

import anonymousParticipant from "../../assets/images/more/anonymous.png";
import anonymousComment from "../../assets/images/more/anonymous2.svg";

function Owner({ postDate }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={anonymousParticipant}
          loading="lazy"
          alt="Anonymous user"
          className="size-16 rounded-full bg-gray-100 p-2"
        />
        <div>
          <p className="font-medium">Anonymous participant</p>
          <span className="block text-sm text-gray-600"> {postDate} </span>
        </div>
      </div>
      <button
        aria-label="post actions"
        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100"
      >
        <HiEllipsisHorizontal className="size-8 text-gray-600" />
      </button>
    </div>
  );
}

function Reactions({ likesNum, commentsNum, sharesNum }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <BiSolidLike className="z-[2] size-6 rounded-full bg-[#217cfe] p-1 text-white" />
        <HiHeart className="-ml-2 size-6 rounded-full bg-[#fc4d52] p-1 text-white" />
        <span className="ml-1 text-gray-600">{likesNum}</span>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-gray-600">{commentsNum} Comments</p>
        <p className="text-gray-600">{sharesNum} Shares</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="grid grid-cols-3 border-y-2 border-gray-200 py-1">
      <button className="flex items-center justify-center gap-1 rounded-lg py-2 text-gray-600 hover:bg-gray-100">
        <SlLike className="size-6 shrink-0" />
        <span>Like</span>
      </button>

      <button className="flex items-center justify-center gap-1 rounded-lg py-2 text-gray-600 hover:bg-gray-100">
        <HiOutlineChatBubbleOvalLeft className="size-6 shrink-0" />
        <span>Comment</span>
      </button>

      <button className="flex items-center justify-center gap-1 rounded-lg py-2 text-gray-600 hover:bg-gray-100">
        <PiShareFatLight className="size-6 shrink-0" />
        <span>Share</span>
      </button>
    </div>
  );
}

function Comment({ name, content, date }) {
  return (
    <div className="flex items-start gap-4">
      <img
        src={anonymousComment}
        loading="lazy"
        alt="Anonymous comment"
        className="size-10 rounded-full bg-gray-100 p-2"
      />
      <div className="w-full">
        <div className="mb-2 space-y-2 rounded-xl bg-gray-100 p-4">
          <p className="mb-2 font-semibold">{name}</p>
          {content}
        </div>
        <div className="flex items-center gap-4">
          <span>{date}</span>
          <button
            aria-label="Like comment"
            className="text-gray-600 hover:underline"
          >
            Like
          </button>
          <button
            aria-label="Replay comment"
            className="text-gray-600 hover:underline"
          >
            Replay
          </button>
          <button
            aria-label="Share comment"
            className="text-gray-600 hover:underline"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

function Post({
  children,
  postDate = "5 days ago",
  likesNum = 182,
  commentsNum = 12,
  sharesNum = 8,
  commentsList = [],
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-6">
      <Owner postDate={postDate} />

      {/* The post content itself */}
      {children}

      <Reactions
        likesNum={likesNum}
        commentsNum={commentsNum}
        sharesNum={sharesNum}
      />

      <Actions />

      {commentsList.map((item) => {
        return (
          <Comment
            key={item.id}
            name={item.name}
            content={item.content}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default Post;
