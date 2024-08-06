import { motion } from "framer-motion";
import { RiCheckDoubleLine } from "react-icons/ri";

function Chat({ conversation }) {
  return (
    <div className="p-3 text-xs lg:text-sm">
      <p className="mx-auto mb-4 w-fit rounded-md bg-[#1b1b1b] px-2 py-1 text-gray-400">
        Jan 9, 2007
      </p>

      {conversation.map((message, index) => {
        return (
          <motion.div
            key={message.id}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              x: message.dir === "left" ? -200 : 200,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
            }}
            viewport={{ once: false }}
            transition={{
              delay: 0.35 * index,
              type: "spring",
              stiffness: 140,
              damping: 15,
            }}
            className={`relative z-[2] mb-2 flex flex-col gap-0.5 rounded-xl pb-1 pl-2 pr-1 pt-2 ${message.dir === "left" ? "bg-[#353535]" : "bg-[#005c4b]"}`}
          >
            <span
              className={`absolute top-0 z-[-1] size-4 ${message.dir === "left" ? "-left-1 rounded-bl-full bg-[#353535]" : "-right-1 rounded-br-full bg-[#005c4b]"}`}
            />
            <p> {message.text} </p>
            <div className="flex items-center justify-end gap-1">
              <small className="text-gray-400">{message.time}</small>
              <small className="text-indigo-400">
                <RiCheckDoubleLine className="size-4" />
              </small>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Chat;
