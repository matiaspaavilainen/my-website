export type Photo = {
	title: string;
	file_n: string;
	thumb_n: string;
	time_taken: number;
	category: string[];
};

export type ImageFile = {
	filename: string;
	date: number;
};

export type FilterOption = {
	value: string;
	label: string;
};
