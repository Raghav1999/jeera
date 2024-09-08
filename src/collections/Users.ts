import { isAdmin, isHiddenOnAdminPage } from "../accessControl";
import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "name",
    hideAPIURL: true,
    hidden: isHiddenOnAdminPage,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "userType",
      type: "select",
      required: true,
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
};

export default Users;
