import React, { useState } from 'react';

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const fileChangeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const uploadFileHandler = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        // Here you would make an API call to upload the file
        console.log('File ready to upload', selectedFile);
    };

    return (
        <div>
            <input type="file" onChange={fileChangeHandler} />
            <button onClick={uploadFileHandler} disabled={!selectedFile}>Upload</button>
        </div>
    );
};

export default Upload;