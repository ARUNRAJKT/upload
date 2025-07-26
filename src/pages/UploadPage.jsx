import React from 'react';
import FileUploadMain from '../components/FileUploadMain';

export default function UploadPage() {
    return (
        <div>
            <FileUploadMain
                maxFileSize={100 * 1024 * 1024} 
                acceptedTypes={['image/jpeg', 'image/png', 'image/jpg']} 
                maxFiles={10} 
            />
        </div>
    );
}