import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from "express";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();

  app.get("/", (_, res) => {
    res.send("Hello");
  });

  app.listen(4000, () => {
    console.log("\n *** Server running on localhost:4000 *** \n");
  });
};

main().catch((err) => {
  console.error(err);
});
