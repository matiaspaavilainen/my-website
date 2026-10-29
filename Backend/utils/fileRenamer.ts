import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.resolve();

const fileRenamer = async (
	file: string,
	title: string,
	date: Number,
): Promise<string[]> => {
	const filePath = path.join(__dirname, "public/");
	const newFilename = `${title}_${date}.${file.split(".").pop()}`;

	try {
		await fs.promises.rename(
			path.join(filePath, "toAdd/", file),
			path.join(filePath, "fullRes/", newFilename),
		);

		const ogFile = path.join(filePath, "fullRes/", newFilename);

		const thumbnail = sharp(ogFile).resize(540, 360);

		const thumbFilename = `${title}_${date}_thumbnail.${file.split(".").pop()}`;
		await fs.promises.writeFile(
			path.join(filePath, "thumbnails/", thumbFilename),
			thumbnail,
		);

		const displayFile = sharp(ogFile).resize(2400, 1600);

		const displayFilename = `${title}_${date}_display.${file.split(".").pop()}`;
		await fs.promises.writeFile(
			path.join(filePath, "display/", displayFilename),
			displayFile,
		);

		return [newFilename, displayFilename, thumbFilename];
	} catch (error) {
		console.error("Error renaming file:", error);
		throw error;
	}
};

export default fileRenamer;
