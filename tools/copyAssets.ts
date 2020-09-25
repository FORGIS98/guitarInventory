import * as shell from "shelljs";

// Copy all the view templates into dist
shell.cp("-R", "src/views", "dist/");

