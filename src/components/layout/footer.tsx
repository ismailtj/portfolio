import Image from "next/image";
import { FaInstagram, FaLinkedin, FaSnapchatGhost } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border-t-2 border-white/20 bg-white/5 ">
      <div className="lg:container lg:max-w-5xl mx-1 md:m-auto py-2 px-1 flex justify-between items-center">
        <Image src="/bearY.png" alt="bear image" width={50} height={50} />
        <div className="flex gap-3 text-white/70">
          <FaLinkedin />
          <FaInstagram />
          <FaSnapchatGhost />
        </div>
        {/* <div className="flex  text-orange gap-1">
          <Image src="/paw-print.png" alt="bear image" width={20} height={10} />
          <p>Made with</p>
          <p>bear&apos;s Love</p>
          <Image src="/paw-print.png" alt="bear image" width={20} height={10} />
        </div> */}
      </div>
    </div>
  );
}
