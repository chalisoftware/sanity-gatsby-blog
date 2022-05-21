export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6288a05283a2305f45171e2f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-com6n998",
                  apiId: "804a0f84-56ee-4496-a026-c703940ff00e",
                },
                {
                  buildHookId: "6288a0535a97cd655954edba",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yovzhia4",
                  apiId: "5c8f0109-8b7f-4db4-aca1-c7c7b1a338b8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/chalisoftware/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yovzhia4.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
