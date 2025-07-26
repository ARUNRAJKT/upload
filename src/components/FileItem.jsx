import React from 'react';
import { X } from 'lucide-react';
import './index.css';

/**
 * Formats file size in bytes to human readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 10) / 10 + ' ' + sizes[i];
};

export default function FileItem({ file, onRemove, disabled }) {
  return (
    <div className="file-item">
      <div className="file-info">
        {/* File thumbnail */}
        <div className="file-icon">
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="file-thumbnail"
          />
        </div>
        
        {/* File details */}
        <div className="file-details">
          <div className="file-name" title={file.name}>
            {file.name}
          </div>
          <div className="file-size">
            {formatFileSize(file.size)}
          </div>
        </div>
      </div>
      
      {/* Remove button - only show when not disabled */}
      {!disabled && (
        <button
          onClick={onRemove}
          className="remove-file-btn"
          type="button"
          aria-label="Remove file"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}