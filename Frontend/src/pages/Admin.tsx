import axios from "axios";
import { useEffect, useState, type SubmitEvent } from "react";
import Select from "react-select";
import type { ImageFile, FilterOption } from "../types/types";

const getFiles = async () => {
	try {
		const response = await axios.get("/admin/files");
		return response.data;
	} catch (error) {
		console.log("Error getting the files: ", error);
		return [];
	}
};

const postPhoto = async (
	date: number,
	title: string,
	category: string[],
	filename: string,
) => {
	const newPhoto = {
		date: date,
		title: title,
		category: category,
		file_n: filename,
	};

	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await axios.post("/admin", newPhoto, config);
		return response;
	} catch (error) {
		console.log("Error posting the image", error);
	}
};

const Admin = () => {
	const [imageFiles, setImageFiles] = useState<ImageFile[]>([]);
	const [currentFile, setCurrentFile] = useState<ImageFile>();

	const [title, setTitle] = useState("");
	const [categories, setCategories] = useState<FilterOption[]>([]);

	// TODO: allow user generated values
	const options = [
		{ value: "Space", label: "Space" },
		{ value: "Crete", label: "Crete" },
		{ value: "Animals", label: "Animals" },
		{ value: "Nature", label: "Nature" },
		{ value: "Scenery", label: "Scenery" },
		{ value: "City", label: "City" },
		{ value: "Food", label: "Food" },
		{ value: "Other", label: "Other" },
		{ value: "Norway", label: "Norway" },
	];

	const handleSubmit = async (e: SubmitEvent) => {
		console.log(typeof e);
		e.preventDefault();
		const categoryArr = categories.map((obj: FilterOption) => obj.value);
		const response = await postPhoto(
			currentFile!.date,
			title,
			categoryArr,
			currentFile!.filename,
		);

		if (response!.status !== 201) {
			console.log("Failed sending the image");
			return;
		}
		imageFiles.shift();
		setImageFiles(imageFiles);
		setCurrentFile(imageFiles[0]);
		console.log(currentFile);
		setTitle("");
		setCategories([]);
	};

	useEffect(() => {
		getFiles().then((files) => {
			if (Array.isArray(files)) {
				setImageFiles(files);
			} else {
				console.error("Expected an array");
				setImageFiles([]);
			}
		});
	}, []);

	useEffect(() => {
		if (imageFiles.length === 0) {
			return;
		}
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setCurrentFile(imageFiles[0]);
	}, [imageFiles]);

	return (
		<>
			{currentFile && (
				<div className="submission-wrapper">
					<div className="image-display">
						<img
							src={`/public/toAdd/${currentFile.filename}`}
							alt="Cant show image"
							width={1000}
						/>
					</div>
					<div>
						<h2>{imageFiles.length} files remaining.</h2>
						<form
							className="image-form"
							onSubmit={handleSubmit}>
							<label>
								Date:{" "}
								<input
									type="text"
									value={new Date(
										currentFile.date,
									).toLocaleDateString()}
									name="Date"
									readOnly={true}
								/>
							</label>
							<label>
								Title:{" "}
								<input
									type="text"
									value={title}
									name="Title"
									onChange={({ target }) => {
										setTitle(target.value);
									}}
								/>
							</label>
							<label>
								Categories:
								<Select
									id="select"
									options={options}
									isMulti
									value={categories}
									onChange={(choice) => {
										if (choice.length <= 2) {
											setCategories([...choice]);
										}
									}}
									defaultValue={null}
								/>
							</label>
							<label>
								Filename:{" "}
								<input
									type="text"
									value={currentFile.filename}
									name="Filename"
									readOnly={true}
								/>
							</label>

							<button
								type="submit"
								disabled={
									title.length === 0 ||
									categories.length === 0
								}>
								Send
							</button>
						</form>
					</div>
				</div>
			)}
			{!currentFile && (
				<div id="folder-empty">
					<h1>The folder is empty</h1>
				</div>
			)}
		</>
	);
};

export { Admin };
