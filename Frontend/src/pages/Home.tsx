import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import githubWhite from "../assets/github-white.svg";
import linkedinWhite from "../assets/linkedin-white.svg";
import solarSystem from "../assets/solarSystem.svg";
import type { Photo } from "../types/types";

const photoPath = import.meta.env.MODE === "development" ? "/" : "/public/";

const getRandom = async (): Promise<Photo> => {
	const response = await axios.get("/api/photos/random");
	const photo = response.data.shift();

	return {
		title: photo.title,
		categories: photo.category,
		file_n: photo.file_n,
		display_n: photo.display_n,
		thumb_n: photo.thumb_n,
		time_taken: photo.time_taken,
		colors: photo.colors,
	};
};

const Home = () => {
	const [photo, setPhoto] = useState<Photo>();

	useEffect(() => {
		getRandom().then((photo) => {
			setPhoto(photo);
		});
	}, []);

	return (
		<div className="home-container">
			{photo ? (
				<div
					className="image-container"
					style={{ gridArea: "image-container" }}>
					<Link
						to="/Photos"
						onClick={() => {}}>
						<img
							className="image"
							style={{ gridArea: "image" }}
							src={`${photoPath}display/${photo.display_n}`}
							alt={photo.title}
							loading="lazy"
						/>
					</Link>
				</div>
			) : null}
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
};

export { Home };
