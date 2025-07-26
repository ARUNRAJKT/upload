import React from 'react';
import { Upload } from 'lucide-react';
import './index.css';

export default function UploadButton({
    files,
    onUpload,
    isUploading,
    uploadProgress
}) {
    // Don't render if no files selected
    if (files.length === 0) return null;

    return (
        <div className="upload-action">
            <button
                onClick={onUpload}
                disabled={isUploading}
                className={`upload-action-button ${isUploading ? 'uploading' : ''}`}
            >
                {isUploading ? (
                    <>
                        <div className="spinner" />
                        Uploading... {uploadProgress}%
                    </>
                ) : (
                    <>
                        Upload Files
                    </>
                )}
            </button>

            {/* Progress bar - shown during upload */}
            {isUploading && (
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${uploadProgress}%` }}
                    />
                </div>
            )}
        </div>
    );
}