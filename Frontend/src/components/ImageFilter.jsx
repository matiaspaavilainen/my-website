import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useEffect, useState } from 'react';

const ImageFilter = ({ onSortChange, selectedFilter, setSelectedFilter, optionsFilter }) => {
    const animatedComponents = makeAnimated();

    const optionsOrder = [
        { value: 'time_taken', label: 'Time' },
        { value: 'title', label: 'Title' },
    ];

    // false == DESC, true == ASC
    const [sortDirection, setSortDirection] = useState(false);
    const [selectedSort, setSelectedSort] = useState(optionsOrder[0]);

    useEffect(() => {
        const sortObject = { sort: selectedSort.value, direction: sortDirection };
        onSortChange(sortObject);
    }, [selectedSort, sortDirection, onSortChange]);

    const handeSortChange = (option) => {
        setSelectedSort(option);
    };

    const handleFilterChange = (options) => {
        setSelectedFilter(options);
    };

    const theme = (theme) => ({
        ...theme,
        borderRadius: '0 8px 8px 0',
        colors: {
            ...theme.colors,
            neutral0: 'rgb(40, 40, 40)', // BG
            neutral20: 'lightgray',
            primary: 'lightgray',
            primary25: 'rgb(88, 17, 202)',
            danger: 'gray',
            dangerLight: 'transparent'
        }
    });

    const style = {
        control: (baseStyles) => ({
            ...baseStyles,
            boxShadow: "none",
        }),
        multiValue: (baseStyles) => ({
            ...baseStyles,
            borderRadius: '3px',
            padding: '3px',
            width: 'fit-content',
            backgroundColor: 'rgb(88, 17, 202)',
        }),
        multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            color: 'lightgray',
            fontWeight: '600',
            padding: '3px 0 0 0'
        }),
        multiValueRemove: (baseStyles) => ({
            ...baseStyles,
            borderRadius: '3px',
            padding: '0 2px 0 4px'
        }),
        menu: (baseStyles) => ({
            ...baseStyles,
            borderRadius: '4px',
            padding: '4px 6px'
        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: '4px',
            padding: '8px 6px 4px 6px',
            color: state.isFocused ? 'black' : '',
            backgroundColor: state.isFocused ? 'lightgray' : '',
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            color: 'lightgray',
            borderRadius: '4px',
            fontSize: 'large',
            padding: '4px 0 0 2px'
        }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
            color: 'lightgray',
            fontSize: 'large',
            padding: '4px 0 0 0'
        }),
    };

    return (
        <div className="image-sort-filter">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className='image-sort'>
                <p className='info-box'>Sort by:</p>
                <Select
                    styles={style}
                    theme={theme}
                    className="image-sort-select"
                    value={selectedSort}
                    onChange={handeSortChange}
                    isClearable={false}
                    isSearchable={false}
                    autoFocus={false}
                    blurInputOnSelect={true}
                    options={optionsOrder}
                    components={animatedComponents}
                />
            </div>

            <div className='sort-direction'>
                <p className='info-box'>Order:</p>
                <button className={"sort-direction"}
                    onClick={() => {
                        setSortDirection(!sortDirection);
                    }}>
                    {sortDirection ? <i className="fa fa-arrow-up"></i> : <i className="fa fa-arrow-down"></i>}
                </button>
            </div>

            <div className='image-filter'>
                <p className='info-box'>Filter:</p>
                <Select
                    styles={style}
                    theme={theme}
                    className="image-filter-select"
                    isMulti
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    isClearable={true}
                    autoFocus={false}
                    closeMenuOnSelect={true}
                    options={optionsFilter}
                    filterOption={() => selectedFilter.length < 2}
                    noOptionsMessage={() => 'Maximum number of tags selected'}
                    components={animatedComponents}
                />
            </div>
        </div>
    );
};

export default ImageFilter;