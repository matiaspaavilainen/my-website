export type Photo = {
	title: string;
	file_n: string;
	display_n: string;
	thumb_n: string;
	time_taken: number;
	categories: string[];
	colors: colorObject;
};

export type ImageFile = {
	filename: string;
	date: number;
};

export type FilterOption = {
	value: string;
	label: string;
};

export type colorObject = {
	// color hex values
	background: string;
	foreground: string;
	cursor: string;
	border: string;
	accent: string;
	accent_foreground: string;
	selection_background: string;
	selection_foreground: string;
	cursor_text: string;
};
