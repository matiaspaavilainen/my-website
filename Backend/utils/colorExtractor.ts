import { spawnSync } from "node:child_process";
import path from "node:path";

const colorExtractor = (fileName: string): object => {
	const __dirname = path.resolve();
	const filePath = path.join(__dirname, "public/toAdd/", fileName);

	// uses the hellwal program to generate colors from the image
	// https://github.com/danihek/hellwal

	const hw = spawnSync(
		"hellwal",
		["-i", filePath, "--comfort-mode", "--json"],
		{ encoding: "utf8" },
	);

	return JSON.parse(hw.stdout).special;
};

export { colorExtractor };
