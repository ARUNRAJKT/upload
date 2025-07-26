import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import './index.css';

export default function FileUploadDropzone({ onFilesSelect, disabled }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  /**
   * Opens file selection dialog when dropzone is clicked
   */
  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  /**
   * Handles file selection from file input
   */
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      onFilesSelect(files);
    }
  };

  /**
   * Handles file drop on dropzone
   */
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (!disabled) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      if (droppedFiles.length > 0) {
        onFilesSelect(droppedFiles);
      }
    }
  };

  /**
   * Handles drag over event for visual feedback
   */
  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  };

  /**
   * Handles drag leave event
   */
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div
      className={`dropzone ${isDragOver ? 'drag-over' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <Upload className="dropzone-icon" />
      
      <div className="dropzone-content">
        <span className="dropzone-text">
          <span>Upload a file</span> or drag and drop
        </span>
      </div>
      
      <p className="dropzone-hint">
        Image files (jpg, jpeg, png) up to 100MB
      </p>
      
      {/* Hidden file input for click-based file selection */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="file-input-hidden"
        disabled={disabled}
      />
    </div>
  );
}