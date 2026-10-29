import axios from "axios";
import { Link } from "react-router-dom";

import githubWhite from "../assets/github-white.svg";
import linkedinWhite from "../assets/linkedin-white.svg";
import solarSystem from "../assets/solarSystem.svg";
import { useEffect, useState } from "react";
import type { Photo } from "../types/types";

const photoPath = import.meta.env.MODE === "development" ? "/" : "/public/";

const getRandom = async (): Promise<Photo> => {
	const response = await axios.get("/api/photos/random");
	const photo = response.data.shift();

	return {
		title: photo.title,
		category: photo.category,
		file_n: photo.file_n,
		thumb_n: photo.thumb_n,
		time_taken: photo.time_taken,
	};
};

const Home = () => {
	const [photo, setPhoto] = useState<Photo>();

	useEffect(() => {
		getRandom().then((photo) => {
			setPhoto(photo);
		});
	}, []);

	if (photo) {
		return (
			<div className="home-container">
				<div
					className="image-container"
					style={{ gridArea: "image-container" }}>
					<Link
						to="/Photos"
						onClick={() => {}}>
						<img
							className="image"
							style={{ gridArea: "image" }}
							src={`${photoPath}thumbnails/${photo.thumb_n}`}
							alt={photo.title}
							loading="lazy"
						/>
					</Link>
				</div>
				<div
					className="link-container"
					style={{ gridArea: "link-container" }}>
					<a
						href="https://github.com/matiaspaavilainen"
						target="_blank"
						className="icon git"
						style={{ gridArea: "link-1" }}>
						<img
							src={githubWhite}
							alt="GitHub"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/matiaspaavilainen/"
						target="_blank"
						className="icon linked"
						style={{ gridArea: "link-2" }}>
						<img
							src={linkedinWhite}
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://realconstellations.com"
						target="_blank"
						className="icon realconst"
						style={{ gridArea: "link-3" }}>
						<img
							src={solarSystem}
							alt="RealConstellations"
						/>
					</a>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container">
				<div
					className="link-container"
					style={{ gridArea: "link-container" }}>
					<a
						href="https://github.com/matiaspaavilainen"
						target="_blank"
						className="icon git"
						style={{ gridArea: "link-1" }}>
						<img
							src={githubWhite}
							alt="GitHub"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/matiaspaavilainen/"
						target="_blank"
						className="icon linked"
						style={{ gridArea: "link-2" }}>
						<img
							src={linkedinWhite}
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://realconstellations.com"
						target="_blank"
						className="icon realconst"
						style={{ gridArea: "link-3" }}>
						<img
							src={solarSystem}
							alt="RealConstellations"
						/>
					</a>
				</div>
			</div>
		);
	}
};

export { Home };
