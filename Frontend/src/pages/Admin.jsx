import axios from 'axios';
import { useEffect, useState } from 'react';

const getFiles = async () => {
    try {
        const response = await axios.get('/admin/files');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error getting the files: ', error);
        return [];
    }
};

const Admin = () => {
    const [imageFiles, setImageFiles] = useState([]);
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

    return (
        <div>
            <ul>
                {imageFiles.map((file) => (
                    <li key={file.filename}>{file.filename} on {new Date(file.date).toLocaleDateString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;