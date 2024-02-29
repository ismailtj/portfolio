"use client";
import Image from "next/image";

const formations = [
  {
    name: "Systeme d'information et big data",
    grade: "BAC+3 - LP",
    school: "EST",
    years: "2020 – 2021",
  },
  {
    name: "Developpement informatique",
    grade: "BAC+2 - DUT",
    school: "ISTA",
    years: "2017 – 2019",
  },
];

export default function Studies() {
  return (
    <div className="lg:container lg:max-w-5xl my-10 p-2">
      <div className="flex items-center justify-center gap-3 my-4">
        <Image src="/smiley.png" alt="bear image" width={60} height={60} />
        <h2 className="text-4xl font-bold">
          Academic <span className="text-orange">background</span>
        </h2>
      </div>
      <dl className=" text-gray-900 divide-y divide-gray-700 dark:text-white dark:divide-gray-400">
        {formations.map((item, key) => (
          <div key={key} className="flex flex-col py-3">
            <dd className="text-lg font-semibold">
              {item.name}
              {"  "}
              <span className="inline bg-red text-xs p-1 rounded mr-2">
                {item.grade}
              </span>
            </dd>

            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              {item.school} -- {item.years}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
