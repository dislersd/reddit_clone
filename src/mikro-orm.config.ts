import { Post } from "./entities/Posts";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    // __dirname is the absolute path to the file it's called in
    path: path.join(__dirname, "./migrations"),
    // pattern matching for a .ts or .js file [tj]s = ts or js
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "redditclone",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
