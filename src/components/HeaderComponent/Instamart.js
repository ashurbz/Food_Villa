import { useState } from "react";
import Section from "./Section";

const Instamart = () => {
  const [sectionVisible, setSectionVisible] = useState("");

  return (
    <div>
      <h1 className="font-bold text-3xl p-5">Instamart</h1>
      <div className="p-5  m-5">
        <Section
          title={"About Us"}
          description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
          isVisible={sectionVisible === "about"}
          setIsVisible={(display) => {
            if (display) {
              setSectionVisible("about");
            } else {
              setSectionVisible("");
            }
          }}
        />
        <Section
          title={"Instamart Carriers"}
          description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
          isVisible={sectionVisible === "carriers"}
          setIsVisible={(display) => {
            if (display) {
              setSectionVisible("carriers");
            } else {
              setSectionVisible("");
            }
          }}
        />
        <Section
          title={"Instamart Team"}
          description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
          isVisible={sectionVisible === "Team"}
          setIsVisible={(display) => {
            if (display) {
              setSectionVisible("Team");
            } else {
              setSectionVisible("");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Instamart;
