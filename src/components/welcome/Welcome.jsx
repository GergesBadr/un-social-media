import Chat from "./Chat";
import IPhoneUi from "./IPhoneUi";
import {
  conversationOne,
  conversationThree,
  conversationTwo,
} from "../../utils/constants";

function Welcome() {
  return (
    <section className="responsive-container space-y-14">
      <h2 className="heading-2 text-center uppercase tracking-wider">
        Welcome to the <span className="underlined-word">internet</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-20">
        <IPhoneUi>
          <Chat conversation={conversationOne} />
        </IPhoneUi>
        <IPhoneUi>
          <Chat conversation={conversationTwo} />
        </IPhoneUi>
        <IPhoneUi>
          <Chat conversation={conversationThree} />
        </IPhoneUi>
      </div>
    </section>
  );
}

export default Welcome;
