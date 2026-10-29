import { Link, type Location } from "react-router-dom";

const NavBar = ({
	links,
	location,
}: {
	links: { link: string; text: string }[];
	location: Location;
}) => {
	return (
		<div className={`topbar`}>
			{links.map((link) => (
				<Link
					className={`link${location.pathname === link.link ? " current" : ""}`}
					to={link.link}
					key={link.text}>
					{link.text}
				</Link>
			))}
		</div>
	);
};

export { NavBar };
