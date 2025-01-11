import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const getFiles = async () => {
    try {
        const response = await axios.get('/admin/files');
        return response.data;
    } catch (error) {
        console.log('Error getting the files: ', error);
        return [];
    }
};

const postPhoto = async (date, title, category, filename) => {
    const newPhoto = {
        date: date,
        title: title,
        category: category,
        file_n: filename
    };

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await axios.post('/admin', newPhoto, config);
        return response;
    } catch (error) {
        console.log('Error posting the image', error);
    }
};

const Admin = () => {
    const [imageFiles, setImageFiles] = useState([]);
    const [currentFile, setCurrentFile] = useState('');

    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);

    //TODO: get possible values dynamically from DB
    const options = [
        { value: 'Space', label: 'Space' },
        { value: 'Crete', label: 'Crete' },
        { value: 'Animals', label: 'Animals' },
        { value: 'Nature', label: 'Nature' },
        { value: 'Scenery', label: 'Scenery' },
        { value: 'City', label: 'City' },
        { value: 'Other', label: 'Other' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const categoryArr = categories.map((obj) => obj.value);
        const response = await postPhoto(
            currentFile.date,
            title,
            categoryArr,
            currentFile.filename
        );

        if (response.status !== 201) {
            console.log('Failed sending the image');
            return;
        }
        imageFiles.shift();
        setImageFiles(imageFiles);
        setCurrentFile(imageFiles[0]);
        setTitle('');
        setCategories([]);
    };

    useEffect(() => {
        getFiles().then(files => {
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
        setCurrentFile(imageFiles[0]);

    }, [imageFiles]);


    return (
        <>
            {currentFile &&
                <div className='submission-wrapper'>
                    <div className='image-display'>
                        <img src={`/${currentFile.filename}`} alt='Cant show image' width={1000} />
                    </div>
                    <div>
                        <form className='image-form' onSubmit={handleSubmit}>
                            <label>
                                Date:
                                <input
                                    type='text'
                                    value={new Date(currentFile.date).toLocaleDateString()}
                                    name='Date'
                                    readOnly={true}
                                />
                            </label>
                            <label>
                                Title:
                                <input
                                    type='text'
                                    value={title}
                                    name='Title'
                                    onChange={({ target }) => { setTitle(target.value); }}
                                />
                            </label>
                            <label>
                                Categories:
                                <Select
                                    id='select'
                                    options={options}
                                    isMulti
                                    value={categories}
                                    onChange={
                                        (choice) => {
                                            if (choice.length <= 2) {
                                                setCategories(choice);
                                            }
                                        }
                                    }
                                    defaultValue={null}
                                />
                            </label>
                            <label>
                                Filename:
                                <input
                                    type='text'
                                    value={currentFile.filename}
                                    name='Filename'
                                    readOnly={true}
                                />
                            </label>

                            <button type='submit' disabled={title.length === 0 || categories.length === 0} >Send</button>
                        </form>
                    </div>
                </div>
            }
            {!currentFile && <div id='folder-empty'>
                <h1>The folder is empty</h1>
            </div>}
        </>
    );
};

export default Admin;