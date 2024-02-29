export const jobsApi = {
  getJobs: async () => {
    const res = await fetch(
      "http://localhost:1337/api/jobs?populate[0]=technologies&populate[1]=contract"
    );
    if (!res.ok) {
      throw new Error("failed to fetch jobs");
    }

    return res.json();
  },
};
