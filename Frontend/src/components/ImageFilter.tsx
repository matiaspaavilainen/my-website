import Select, {
	type CSSObjectWithLabel,
	type MultiValue,
	type OptionProps,
	type SingleValue,
	type Theme,
} from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { FilterOption } from "../types/types";

const ImageFilter = ({
	onSortChange,
	selectedFilter,
	setSelectedFilter,
	optionsFilter,
}: {
	onSortChange: Dispatch<
		SetStateAction<{ sort: string; direction: boolean }>
	>;
	selectedFilter: FilterOption[];
	setSelectedFilter: Dispatch<SetStateAction<FilterOption[]>>;
	optionsFilter: FilterOption[];
}) => {
	const animatedComponents = makeAnimated();

	const optionsOrder: FilterOption[] = [
		{ value: "time_taken", label: "Time" },
		{ value: "title", label: "Title" },
	];

	// false == DESC, true == ASC
	const [sortDirection, setSortDirection] = useState(false);
	const [selectedSort, setSelectedSort] = useState<FilterOption>(
		optionsOrder[0],
	);

	useEffect(() => {
		const sortObject = {
			sort: selectedSort.value,
			direction: sortDirection,
		};
		onSortChange(sortObject);
	}, [selectedSort, sortDirection, onSortChange]);

	const handeSortChange = (option: SingleValue<FilterOption>) => {
		if (option !== null) {
			setSelectedSort(option);
		}
	};

	const handleFilterChange = (options: MultiValue<FilterOption>) => {
		setSelectedFilter([...options]);
	};

	const theme = (theme: Theme): Theme => ({
		...theme,
		borderRadius: 8,
		colors: {
			...theme.colors,
			neutral0: "rgb(40, 40, 40)", // BG
			neutral20: "lightgray",
			primary: "lightgray",
			primary25: "rgb(88, 17, 202)",
			danger: "gray",
			dangerLight: "transparent",
		},
	});

	const style = {
		control: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			borderRadius: "0 8px 8px 0",
			boxShadow: "none",
			borderWidth: "0",
		}),

		multiValue: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			borderRadius: "3px",
			fontSize: "14px",
			fontWeight: "600",
			backgroundColor: "rgb(88, 17, 202)",
		}),

		multiValueLabel: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			color: "lightgray",
		}),

		multiValueRemove: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			borderRadius: "3px",
			padding: "0 2px 0 4px",
		}),

		menu: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			borderRadius: "4px",
			padding: "4px 6px",
		}),

		option: (
			baseStyles: CSSObjectWithLabel,
			state: OptionProps<FilterOption, boolean>,
		) => ({
			...baseStyles,
			borderRadius: "4px",
			padding: "8px 6px 4px 6px",
			color: state.isFocused ? "black" : "",
			backgroundColor: state.isFocused ? "lightgray" : "",
		}),

		singleValue: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			color: "lightgray",
			borderRadius: "4px",
			fontSize: "16px",
		}),

		placeholder: (baseStyles: CSSObjectWithLabel) => ({
			...baseStyles,
			color: "lightgray",
			fontSize: "16px",
		}),
	};

	return (
		<div className="image-sort-filter">
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			<div
				className="image-sort"
				style={{ gridArea: "image-sort" }}>
				<p className="info-box">Sort by:</p>
				<Select
					styles={style}
					theme={theme}
					className="image-sort-select"
					value={selectedSort}
					onChange={handeSortChange}
					isMulti={false}
					isClearable={false}
					isSearchable={false}
					autoFocus={false}
					blurInputOnSelect={true}
					options={optionsOrder}
					components={animatedComponents}
				/>
			</div>

			<div
				className="sort-direction"
				style={{ gridArea: "sort-direction" }}>
				<p className="info-box">Order:</p>
				<button
					id="sort-button"
					onClick={() => {
						setSortDirection(!sortDirection);
					}}>
					{sortDirection ? (
						<i className="fa fa-chevron-up"></i>
					) : (
						<i className="fa fa-chevron-down"></i>
					)}
				</button>
			</div>

			<div
				className="image-filter"
				style={{ gridArea: "image-filter" }}>
				<p className="info-box">Filter:</p>
				<Select
					styles={style}
					theme={theme}
					className="image-filter-select"
					isMulti={true}
					value={selectedFilter}
					onChange={handleFilterChange}
					isClearable={true}
					isSearchable={false}
					autoFocus={false}
					closeMenuOnSelect={true}
					options={optionsFilter}
					filterOption={() => selectedFilter.length < 2}
					noOptionsMessage={() => "Maximum number of tags selected"}
					components={animatedComponents}
				/>
			</div>
		</div>
	);
};

export { ImageFilter };
