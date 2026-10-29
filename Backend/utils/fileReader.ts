import fs from "node:fs";
import dateReader from "./dateReader.ts";
import path from "node:path";

const __dirname = path.resolve();

const fileReader = async (): Promise<{ filename: string; date: number }[]> => {
	const filePath = path.join(__dirname, "public/toAdd/");

	// Check if directory exists
	if (!fs.existsSync(filePath)) {
		console.log(`Directory not found: ${filePath}`);
		return [];
	}

	const files = fs.readdirSync(filePath);

	const promises = files.map(async (file) => {
		try {
			const date = await dateReader(path.join(filePath, file));
			return {
				filename: file,
				date: date,
			};
		} catch (error) {
			console.error(`Error reading EXIF data for ${file}:`, error);
			return null;
		}
	});

	let file_data = (await Promise.all(promises))
		.filter((item) => item !== null) // Remove failed items
		.toSorted((a, b) => a.date - b.date);

	return file_data;
};

export default fileReader;
