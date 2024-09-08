import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Projects from "./collections/Projects";
import Issues from "./collections/Issues";
import Counters from "./collections/Counters";
import { Logo } from "./components/Logo";
import { Icon } from "./components/Icon";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Jeera",
      favicon: "/assets/favicon.png",
      ogImage: "/assets/logo.png",
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  editor: slateEditor({}),
  collections: [Users, Projects, Issues, Counters],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
