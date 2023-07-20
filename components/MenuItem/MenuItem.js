import React, { useState } from "react";
import { motion } from "framer-motion";

import { Transition } from "@headlessui/react";
import HorizontalLine from "../HLine/Hline";
import { useRouter } from "next/navigation";

const MenuItem = ({ isMenuItemsShown, text, routeTo, onClick }) => {
  const router = useRouter();

  const [isHover, setHover] = useState(false);

  return (
    <div
      className="z-50 cursor-pointer h-[50px]"
      onClick={
        onClick != null
          ? onClick
          : () => {
              console.log(`Routing to ${routeTo}`);
              router.push(routeTo);
            }
      }
    >
      <Transition
        show={isMenuItemsShown}
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-1000 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <Transition.Child
          enter="transition-opacity duration-[1s]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-[1s]"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="cursor-pointer py-3 w-full"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {text}
          </div>
          <Transition
            show={isHover}
            enter="transition-transform origin-left ease-in duration-500"
            enterFrom="scale-x-0"
            enterTo="scale-x-100"
            leave="transition-transform origin-right ease-out duration-500"
            leaveFrom="scale-x-100"
            leaveTo="scale-x-0"
          >
            <HorizontalLine />
          </Transition>
        </Transition.Child>
      </Transition>
    </div>
  );
};

export default MenuItem;
