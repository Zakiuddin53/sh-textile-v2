import fs from "fs/promises";
import fsExtra from "fs-extra";
import path from "path";

export async function build() {
  await fsExtra.ensureDir("dist");

  await fs.cp(path.join(".next", "standalone"), path.join("dist"), {
    recursive: true,
  });

  await fs.cp(
    path.join(".next", "static"),
    path.join("dist", ".next", "static"),
    {
      recursive: true,
    }
  );

  await fs.cp(path.join("public"), path.join("dist", "public"), {
    recursive: true,
  });

  await fsExtra.ensureFile(path.join("dist", "start.bat"));
  await fsExtra.rm(path.join("dist", "start.bat"));

  await fs.writeFile(
    path.join("dist", "start.bat"),
    `start node server.js \n start http://localhost:3000`
  );
}

build();
