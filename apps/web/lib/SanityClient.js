import sanity from "@sanity/client";

console.log(process.env.PROJECT_ID, process.env.DATASET);

export default sanity({
  projectId: process.env.PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: false,
});
