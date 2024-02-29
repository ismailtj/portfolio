import Image from "next/image";

export default function Contact() {
  return (
    <div
      className="lg:container lg:max-w-5xl flex flex-col md:flex-row mb-5 bg-black/20 p-8  "
      id="contactBox"
    >
      <div className="md:basis-2/3">
        <div className="flex items-center justify-start gap-3 mb-7">
          <Image src="/animal.png" alt="bear image" width={70} height={70} />
          <h2 className="text-4xl font-bold max-w-sm">
            Let&apos;s <span className="text-orange">work together</span> on
            your next <span className="text-orange">projects</span>
          </h2>
        </div>
        <p className="pt1-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque diam in turpis egestas, nec rutrum enim mattis. Integer
          varius orci vel risus dapibus commodo.
        </p>
      </div>
      <div className="md:basis-1/3 flex items-center justify-center mt-8 md:mt-0">
        <button className="bg-red font-bold px-3 py-2 rounded-lg text-lg w-full md:w-auto">
          Contact me
        </button>
      </div>
    </div>
  );
}
