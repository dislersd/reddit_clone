import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Posts";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "redditclone",
    type: "postgresql",
    debug: !__prod__,
  });
 
  const post = orm.em.create(Post, { title: "my first post" });
  await orm.em.persistAndFlush(post);
  console.log("-----------------sql 2-----------------")
  // another way to insert into Post table (nativeInsert)
  await orm.em.nativeInsert(Post, { title: "my first post 2" });
};

main().catch((err) => {
  console.error(err);
});
