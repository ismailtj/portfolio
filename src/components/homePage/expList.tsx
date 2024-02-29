/* eslint-disable @next/next/no-async-client-component */
"use client";
import { IJob } from "@/model/jobList";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ExpList({ jobsList }: { jobsList: IJob[] }) {
  console.log(jobsList);

  return (
    <Carousel
      showArrows={true}
      showIndicators={false}
      centerMode
      className="ExpProCarousel"
      centerSlidePercentage={70}
      swipeable
    >
      {jobsList.map((item, key) => (
        <div
          key={key}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-purpel px-6 pt-4 pb-0 text-left float-right"
        >
          <h3 className="text-2xl font-bold mb-3">{item.attributes.title} </h3>
          <p className="inline font-bold">{item.attributes.Company} </p>
          <p className="inline bg-red text-xs p-1 rounded">
            {item.attributes.contract.data.attributes.title}
          </p>
          <p className=" inline text-right float-right text-gray-300 text-xs">
            {item.attributes.start.split("-")[0]}/
            {item.attributes.start.split("-")[1]} -
            {item.attributes.end.split("-")[0]}/
            {item.attributes.end.split("-")[1]}
          </p>
          <hr className="my-3" />
          <p
            className="text-pretty line-clamp-5
          "
          >
            {item.attributes.description}{" "}
          </p>
          <div className="px-6 pt-4 pb-2">
            {item.attributes.technologies.data.map((tec, key) => (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                key={key}
              >
                #{tec.attributes.Name}
              </span>
            ))}

            <button className="px-3 py-2 rounded-sm shadow-md float-right bg-orange mb-1">
              Read more
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
