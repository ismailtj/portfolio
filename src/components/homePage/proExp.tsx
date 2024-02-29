import Image from "next/image";
import ExpList from "./expList";
import { jobsApi } from "@/API/jobsAPI";
import { IJob } from "@/model/jobList";

export default async function ProExp() {
  const data: { data: IJob[] } = await jobsApi.getJobs();

  return (
    <div className="flex w-full flex-col md:flex-row  ">
      <div className="w-full bg-grey md:w-1/2  ">
        <div className="lg:container lg:max-w-xl float-end md:p-10 py-4 px-2 flex flex-col h-full justify-center gap-10">
          <div className="flex items-center gap-3">
            <Image src="/smile.png" alt="bear image" width={60} height={60} />
            <h2 className="text-4xl font-bold">
              Professional <span className="text-orange">Exp</span>
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            scelerisque diam in turpis egestas, nec rutrum enim mattis. Integer
            varius orci vel risus dapibus commodo. Mauris ac rhoncus turpis, in
            dignissim urna. Mauris et ante odio. Nullam in eros erat. Morbi ut
            fermentum massa. Proin non maximus ex.
          </p>
        </div>
      </div>
      <div className="w-full bg-grey md:bg-transparent md:w-1/2 ">
        <div className="lg:container lg:max-w-xl  md:p-10 md:pb-0">
          <ExpList jobsList={data.data} />
        </div>
      </div>
    </div>
  );
}
