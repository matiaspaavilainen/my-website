import Select from 'react-select';

const ImageFilter = () => {
    const options = [
        { value: 'newest', label: 'Newest' },
        { value: 'oldest', label: 'Oldest' },
    ]
    return (
        <div className="image-filter">
            <Select
                className="image-filter-select"
                defaultValue={options[0]}
                isClearable={true}
                blurInputOnSelect={true}
                name='image-filter'
                options={options} />
        </div>
    );
}

export default ImageFilter;