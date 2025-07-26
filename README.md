# File Upload App

A simple React app for uploading images with drag and drop functionality.

## What it does

This app lets users upload image files by either dragging and dropping them or clicking to browse. It shows thumbnails of selected images, validates file types and sizes, and displays upload progress.

## Features

- Drag and drop files or click to browse
- Only accepts JPG, JPEG, and PNG images
- Maximum 100MB per file, up to 10 files
- Shows image thumbnails before upload
- Upload progress bar
- Remove files before uploading
- Works on mobile and desktop
- Simple 404 page

## Project structure

```
src/
├── pages/
│   ├── UploadPage.js          # Main page
│   └── PageNotFound.js        # 404 page
├── components/
│   ├── FileUploadMain.js      # Main component with all the logic
│   ├── FileUploadDropzone.js  # Drop zone area
│   ├── FileList.js           # Shows selected files
│   ├── FileItem.js           # Single file with thumbnail
│   ├── UploadButton.js       # Upload button
│   └── index.css             # All the styles
```

## How to run

1. Install dependencies:
```bash
npm install
```

2. Start the app:
```bash
npm start
```

3. Open http://localhost:3000

## Configuration

You can change these settings in `UploadPage.js`:

```javascript
<FileUploadMain
  maxFileSize={100 * 1024 * 1024}  // File size limit
  acceptedTypes={['image/jpeg', 'image/png', 'image/jpg']}  // Allowed types
  maxFiles={10}  // How many files
/>
```

## Tech used

- React with hooks
- Lucide React for icons
- Regular CSS for styling
- HTML5 File API for file handling

Built with Create React App.