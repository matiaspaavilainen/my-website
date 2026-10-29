import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { FilterOption, Photo } from "../types/types";

const photoPath = import.meta.env.MODE === "development" ? "/" : "/public/";

const PhotoCard = ({
	setShowPhotoLarge,
	setSelectedFilter,
	photoLarge,
}: {
	setShowPhotoLarge: Dispatch<SetStateAction<boolean>>;
	setSelectedFilter: Dispatch<SetStateAction<FilterOption[]>>;
	photoLarge: Photo;
}) => {
	useEffect(() => {
		// Disable scrolling when card is open
		document.body.style.overflow = "hidden";
		document.documentElement.style.scrollbarGutter = "stable";

		return () => {
			// Re-enable scrolling when card is closed
			document.body.style.overflow = "";
			document.documentElement.style.scrollbarGutter = "auto";
		};
	}, []);

	const handleClose = () => {
		setShowPhotoLarge(false);
	};

	const handleTagClick = (category: string) => {
		setSelectedFilter([{ value: category, label: category }]);
		setShowPhotoLarge(false);
	};

	return (
		<div
			className="photo-card-large"
			style={{ gridArea: "photo-card-large" }}>
			<img
				className="photo-card-large img"
				style={{ gridArea: "photo-card-image" }}
				src={`${photoPath}display/${photoLarge.file_n}`}
				alt={photoLarge.title}
				loading="lazy"
			/>
			<div
				className="photo-card-info"
				style={{ gridArea: "photo-card-info" }}>
				<h1>{photoLarge.title}</h1>
				<hr id="title-underline" />
				<p id="date">
					{new Date(Number(photoLarge.time_taken)).toLocaleDateString(
						"FI",
					)}
				</p>

				<div className="photo-card-categories">
					<p>Tags:</p>
					{photoLarge.category.map((category: string) => (
						<button
							key={category}
							className={`category ${category}`}
							onClick={() => handleTagClick(category)}>
							{category}
						</button>
					))}
				</div>
			</div>
			<button
				id="close"
				style={{ gridArea: "photo-card-close" }}
				onClick={handleClose}></button>
		</div>
	);
};

export { PhotoCard };
