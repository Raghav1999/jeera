import { isAdmin } from "../accessControl";
import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "name",
    hideAPIURL: true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      access: {
        update: () => false,
      },
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
};

export default Projects;
