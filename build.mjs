// @ts-check

import fs from "fs/promises";
import fsExtra from "fs-extra";
import path from "path";

const distDirLocation = path.join("main", "dist");

export async function build() {
  await fsExtra.ensureDir(distDirLocation);

  await fs.cp(path.join(".next", "standalone"), distDirLocation, {
    recursive: true,
  });

  await fs.cp(
    path.join(".next", "static"),
    path.join(distDirLocation, ".next", "static"),
    {
      recursive: true,
    }
  );

  await fs.cp(path.join("public"), path.join(distDirLocation, "public"), {
    recursive: true,
  });

  await fs.rm(path.join(distDirLocation, "node_modules"), {
    recursive: true,
    force: true,
  });
  await fs.rm(path.join(distDirLocation, "package.json"), { force: true });
}

build();
