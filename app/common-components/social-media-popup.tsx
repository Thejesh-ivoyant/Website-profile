import { Link } from "@remix-run/react";
import chatsIcon from "~/../public/assets/Chats.svg";
import facebook from "~/../public/assets/facebook.svg";
import facebook from "~/../public/assets/facebook.svg";
import linkedin from "~/../public/assets/linkedin.svg";
import insta from "~/../public/assets/insta-color.svg";
import insta from "~/../public/assets/insta-color.svg";
import phone from "~/../public/assets/phonecall.svg";
import closeIcon from "~/../public/assets/X.svg";
import { useState } from "react";
export const Popup = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleButtonClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="fixed grid position-icons z-50 w-fit rounded-full gap-2 place-items-center">
        <Link
          className={`rounded-full h-8 w-8 ${open ? "" : "hidden"}`}
          to={"https://www.facebook.com/ivoyantllc"}
          target="_blank"
        >
          <img src={facebook} className="w-7 h-7" alt="facebook"></img>
        </Link>
        <Link
          className={`rounded-full h-8 w-8 ${open ? "" : "hidden"}`}
          to={"https://in.linkedin.com/company/ivoyant-llc"}
          target="_blank"
        >
          <img src={linkedin} className="w-7 h-7" alt="linkedin"></img>
        </Link>
        <Link
          className={`rounded-full h-8 w-8 ${open ? "" : "hidden"}`}
          to={"https://www.instagram.com/ivoyant/"}
          target="_blank"
        >
          <img src={insta} className="w-7 h-7" alt="instagram"></img>
        </Link>
        <Link
          className={`rounded-full h-8 w-8 ${open ? "" : "hidden"}`}
          to={"/contact-us"}
        >
          <img src={phone} className="w-7 h-7" alt="phone"></img>
        </Link>
        <button
          className="light-indigo-bg rounded-full md:w-[3.75rem] lg:w-[3.75rem] lg:h-[3.75rem] w-[3.75rem] h-[3.75rem] grid place-items-center"
          onClick={handleButtonClick}
        >
          <img
            loading="eager"
            src={!open ? chatsIcon : closeIcon}
            className="w-[2.5rem] h-[2.5rem]"
            alt="chats"
          />
        </button>
      </div>
    </>
  );
};
