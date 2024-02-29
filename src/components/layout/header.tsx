"use client";
import { pagesMenu } from "@/variabls/menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function HeaderMenu() {
  const [ShowMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (ShowMenu) {
      gsap.to("#mobileMenu", {
        width: "100vw",
        height: "100vh",
        scale: 1,
        left: 0,
        borderRadius: 0,
        opacity: 1,
      });
    } else if (!ShowMenu) {
      gsap.to("#mobileMenu", {
        width: 0,
        height: 0,
        scale: 0,
        left: "100vw",
        borderRadius: "100%",
        opacity: 0,
      });
    }
  }, [ShowMenu]);

  return (
    <div className=" fixed bg-dark w-full z-10 shadow-lg">
      <div className="lg:container lg:max-w-5xl mx-1 md:m-auto py-2 px-1 flex justify-between items-center">
        <Image src="/bear.png" alt="bear image" width={40} height={40} />
        <div className="hidden md:block   h-fit ">
          <ul className="flex gap-4 text-pretty">
            {pagesMenu.map((item, key) => (
              <li key={key} className="hover:underline hover:text-orange">
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="block md:hidden"
          onClick={() => setShowMenu(!ShowMenu)}
        >
          <Image src="/menu.png" alt="bear image" width={40} height={40} />
        </button>
      </div>
      <div
        id="mobileMenu"
        className="h-0 w-0 scale-0 md:hidden bg-black/80 backdrop-blur-sm z-10 fixed flex flex-col justify-center items-center gap-8  ${}"
      >
        {pagesMenu.map((item, key) => (
          <Link key={key} href={item.link} className="text-3xl mobileMenuItem">
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
