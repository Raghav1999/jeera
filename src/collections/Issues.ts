import { isAdmin } from "../accessControl";
import payload from "payload";
import { CollectionConfig } from "payload/types";

const Issues: CollectionConfig = {
  slug: "issues",
  admin: {
    useAsTitle: "title",
    hideAPIURL: true,
  },
  fields: [
    {
      name: "project",
      type: "relationship",
      required: true,
      relationTo: "projects",
      access: {
        update: () => false,
      },
    },
    {
      name: "issueKey",
      type: "text",
      admin: {
        readOnly: true,
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "status",
      type: "select",
      required: true,
      options: [
        { label: "TODO", value: "todo" },
        { label: "IN PROGRESS", value: "in-progress" },
        { label: "READY TO TEST", value: "ready-to-test" },
        { label: "READY FOR FINAL CHECK", value: "ready-for-final-check" },
        { label: "DONE", value: "done" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "assignee",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
  access: {
    delete: isAdmin,
  },
  hooks: {
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation === "create") {
          const { project } = data;

          if (project) {
            const { payload } = req;

            // Fetch the project to get the project code
            const projectDoc = await payload.findByID({ collection: "projects", id: project });
            if (projectDoc) {
              const projectCode = projectDoc.name;
              let counter: any = await payload.find({ collection: "counters", where: { collectionName: { equals: "issues" } } });

              if (!counter.totalDocs) {
                counter = await payload.create({
                  collection: "counters",
                  data: {
                    collectionName: "issues",
                    count: 1,
                  },
                });
              } else {
                counter = await payload.update({
                  collection: "counters",
                  id: counter.docs[0].id,
                  data: { count: counter.docs[0].count + 1 },
                });
              }
              const issueCount = counter.count;
              // Generate the issue key
              const issueKey = `${projectCode}-${issueCount}`;

              // Set the issue key in the data
              data.issueKey = issueKey;
            }
          }
        }
        return data;
      },
    ],
  },
};

export default Issues;
