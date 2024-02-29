import Image from "next/image";

export default function Cover() {
  return (
    <div className="lg:container lg:max-w-5xl mt-10 md:mt-0">
      <div className="flex flex-col mt-10 md:mt-0 md:flex-row md:h-screen  items-center gap-5">
        <Image
          src="/health.png"
          alt="bear image"
          className=" animate-wiggle"
          width={300}
          height={300}
        />
        <div className="flex flex-col p-10 w-400 gap-4 ">
          <div>
            <p className="bg-red inline-block py-1 px-2 text-sm rounded-full">
              Développeur web / mobile
            </p>
          </div>
          <h1 className="text-5xl font-bold">
            Hi, I&apos;m <span className="text-orange">Ismail</span>.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            scelerisque diam in turpis egestas, nec rutrum enim mattis. Integer
            varius orci vel risus dapibus commodo. Mauris ac rhoncus turpis, in
            dignissim urna. Mauris et ante odio. Nullam in eros erat. Morbi ut
            fermentum massa. Proin non maximus ex. In mi neque, laoreet quis
            tincidunt at, facilisis ut augue. Proin sit amet mi quis lectus
            blandit dictum. Sed gravida porttitor augue, eget suscipit dui
            tincidunt a. Cras at efficitur elit.
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex gap-10">
              <div className="flex gap-3">
                <p className="text-4xl">3</p>
                <p className="text-sm">
                  YEARS <br />
                  EXPERIENCE
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-4xl">11</p>
                <p className="text-sm">
                  PROJECTS <br />
                  COMPLETED
                </p>
              </div>
            </div>
            <button className="bg-red font-bold px-8 py-3 rounded-lg text-lg mt-5 md:mt-0 animate-pulse ">
              work together
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
