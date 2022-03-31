export default {
  widgets: [
    {
      name: "project-info",
    },
    {
      name: "document-list",
      options: {
        title: "Last edited posts",
        order: "_updatedAt desc",
        types: ["post"],
      },
    },
  ],
}
