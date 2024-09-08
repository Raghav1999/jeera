import { Access } from "payload/config";
import { User } from "payload/dist/auth";

export const isAdmin: Access = ({ req }) => {
  const user = req.user;

  // Check if the user is an admin
  if (user && user.userType === "admin") {
    return true;
  }

  return false;
};

export const isHiddenOnAdminPage = ({ user }: { user: User }): boolean => {
  // Hide the collection if the user is not an admin
  return user?.userType !== "admin";
};
