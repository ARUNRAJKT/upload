import React, { useState } from 'react';
import FileUploadDropzone from './FileUploadDropzone';
import FileList from './FileList';
import UploadButton from './UploadButton';
import './index.css';

export default function FileUploadMain({
  maxFileSize = 100 * 1024 * 1024, // Default 100MB
  acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg'], // Default image types
  maxFiles = 10 // Default max files
}) {

  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * Validates selected files against size, type, and count limits
   * @param {File[]} newFiles - Array of files to validate
   * @returns {string[]} Array of error messages
   */
  const validateFiles = (newFiles) => {
    const errors = [];

    // Check total file count limit
    if (files.length + newFiles.length > maxFiles) {
      errors.push(`Maximum ${maxFiles} files allowed`);
    }

    // Validate each file
    newFiles.forEach(file => {
      if (file.size > maxFileSize) {
        errors.push(`${file.name} exceeds maximum file size`);
      }

      if (!acceptedTypes.includes(file.type)) {
        errors.push(`${file.name} is not a supported file type`);
      }
    });

    return errors;
  };

  /**
   * Handles file selection from dropzone or file input
   * @param {File[]} newFiles - Files selected by user
   */
  const handleFilesSelect = (newFiles) => {
    const errors = validateFiles(newFiles);

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    // Add valid files to state
    setFiles(prev => [...prev, ...newFiles]);
    setShowSuccess(false);
  };

  /**
   * Removes a file from the selected files list
   * @param {number} index - Index of file to remove
   */
  const handleRemoveFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setShowSuccess(false);
  };

  /**
   * Simulates file upload process with progress tracking
   * In real implementation, replace with actual API call
   */
  const handleUpload = async () => {
    if (files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);
    setShowSuccess(false);

    try {
      // Simulate upload progress animation
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 15;
        });
      }, 200);
      
      await new Promise(resolve => setTimeout(resolve, 2000));

      clearInterval(progressInterval);
      setUploadProgress(100);

      // Complete upload process
      setTimeout(() => {
        setFiles([]); // Clear files after successful upload
        setIsUploading(false);
        setUploadProgress(0);
        setShowSuccess(true);

        // Auto-hide success message
        setTimeout(() => setShowSuccess(false), 3000);
      }, 300);

    } catch (error) {
      console.error('Upload failed:', error);
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="file-upload-main">
      <h2 className="upload-title">Upload images</h2>

      {/* File drop zone for selecting files */}
      <FileUploadDropzone
        onFilesSelect={handleFilesSelect}
        disabled={isUploading}
      />

      {/* List of selected files */}
      <FileList
        files={files}
        onRemoveFile={handleRemoveFile}
        disabled={isUploading}
      />

      {/* Upload button with progress */}
      <UploadButton
        files={files}
        onUpload={handleUpload}
        isUploading={isUploading}
        uploadProgress={uploadProgress}
      />

      {/* Success message */}
      {showSuccess && (
        <div className="upload-success-message">
          ✓ Files uploaded successfully!
        </div>
      )}
    </div>
  );
}
