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
                    "623f24155b53862018136adf",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-434uhe5n",
                  apiId: "198f8529-ac87-4d6c-9774-2ddb085e150a",
                },
                {
                  buildHookId: "623f241551fe5b2a9f32b096",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9qguu2o9",
                  apiId: "bdc44437-77be-4e4a-8e77-75c94e86e5ac",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Sirin00/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9qguu2o9.netlify.app",
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
