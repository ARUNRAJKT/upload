
import React from 'react';
import FileItem from './FileItem';
import './index.css';

export default function FileList({ files, onRemoveFile, disabled }) {
  // Don't render if no files selected
  if (files.length === 0) return null;

  return (
    <div className="file-list">
      <div className="file-items">
        {files.map((file, index) => (
          <FileItem
            key={`${file.name}-${file.size}-${index}`} 
            file={file}
            onRemove={() => onRemoveFile(index)}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}