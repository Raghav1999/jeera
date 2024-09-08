import { isHiddenOnAdminPage } from "../accessControl";
import { CollectionConfig } from "payload/types";

const Counters: CollectionConfig = {
  slug: "counters",
  admin: {
    useAsTitle: "collectionName",
    hideAPIURL: true,
    hidden: isHiddenOnAdminPage,
  },
  fields: [
    {
      name: "collectionName",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "count",
      type: "number",
      required: true,
    },
  ],
};

export default Counters;
