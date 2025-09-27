const fs = require('fs');
const path = require('path');

/**
 * Creates a simple favicon.ico file with the letter "G"
 * Uses only built-in Node.js modules
 */

// ICO file header structure
function createIcoHeader(numImages) {
    const buffer = Buffer.alloc(6);
    buffer.writeUInt16LE(0, 0);      // Reserved (must be 0)
    buffer.writeUInt16LE(1, 2);      // Image type (1 = ICO)
    buffer.writeUInt16LE(numImages, 4); // Number of images
    return buffer;
}

// ICO directory entry structure
function createIcoDirectoryEntry(width, height, colorCount, reserved, planes, bitsPerPixel, imageSize, imageOffset) {
    const buffer = Buffer.alloc(16);
    buffer.writeUInt8(width, 0);         // Width (0 = 256)
    buffer.writeUInt8(height, 1);        // Height (0 = 256)
    buffer.writeUInt8(colorCount, 2);    // Color count (0 = no palette)
    buffer.writeUInt8(reserved, 3);      // Reserved (should be 0)
    buffer.writeUInt16LE(planes, 4);     // Color planes
    buffer.writeUInt16LE(bitsPerPixel, 6); // Bits per pixel
    buffer.writeUInt32LE(imageSize, 8);  // Image size in bytes
    buffer.writeUInt32LE(imageOffset, 12); // Offset to image data
    return buffer;
}

// Creates a simple 16x16 bitmap of the letter "G"
function createGBitmap() {
    const width = 16;
    const height = 16;
    
    // Define the letter "G" pattern (1 = black, 0 = transparent)
    // This is a simple 16x16 representation of the letter "G"
    const pattern = [
        [0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0],
        [1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];
    
    // Calculate bitmap size (32-bit RGBA)
    const rowSize = Math.ceil((width * 32) / 32) * 4; // 32-bit alignment
    const pixelDataSize = rowSize * height;
    const maskDataSize = Math.ceil(width / 8) * height; // 1-bit mask
    const totalImageSize = 40 + pixelDataSize + maskDataSize; // 40 = BITMAPINFOHEADER size
    
    // Create bitmap info header (40 bytes)
    const bitmapHeader = Buffer.alloc(40);
    bitmapHeader.writeUInt32LE(40, 0);          // Header size
    bitmapHeader.writeInt32LE(width, 4);        // Width
    bitmapHeader.writeInt32LE(height * 2, 8);   // Height * 2 (for ICO format)
    bitmapHeader.writeUInt16LE(1, 12);          // Planes
    bitmapHeader.writeUInt16LE(32, 14);         // Bits per pixel (32-bit RGBA)
    bitmapHeader.writeUInt32LE(0, 16);          // Compression (0 = none)
    bitmapHeader.writeUInt32LE(pixelDataSize, 20); // Image size
    bitmapHeader.writeUInt32LE(0, 24);          // X pixels per meter
    bitmapHeader.writeUInt32LE(0, 28);          // Y pixels per meter
    bitmapHeader.writeUInt32LE(0, 32);          // Colors used
    bitmapHeader.writeUInt32LE(0, 36);          // Important colors
    
    // Create pixel data (BGRA format, bottom-up)
    const pixelData = Buffer.alloc(pixelDataSize);
    let pixelOffset = 0;
    
    // Process rows from bottom to top (bitmap format)
    for (let y = height - 1; y >= 0; y--) {
        for (let x = 0; x < width; x++) {
            const pixel = pattern[y][x];
            if (pixel === 1) {
                // Black pixel (BGRA)
                pixelData.writeUInt8(0, pixelOffset);     // Blue
                pixelData.writeUInt8(0, pixelOffset + 1); // Green
                pixelData.writeUInt8(0, pixelOffset + 2); // Red
                pixelData.writeUInt8(255, pixelOffset + 3); // Alpha
            } else {
                // Transparent pixel
                pixelData.writeUInt8(0, pixelOffset);     // Blue
                pixelData.writeUInt8(0, pixelOffset + 1); // Green
                pixelData.writeUInt8(0, pixelOffset + 2); // Red
                pixelData.writeUInt8(0, pixelOffset + 3); // Alpha
            }
            pixelOffset += 4;
        }
        // Pad to 32-bit boundary if necessary
        const padding = rowSize - (width * 4);
        pixelOffset += padding;
    }
    
    // Create AND mask (1-bit per pixel, bottom-up)
    const maskBytesPerRow = Math.ceil(width / 8);
    const maskData = Buffer.alloc(maskDataSize);
    let maskOffset = 0;
    
    for (let y = height - 1; y >= 0; y--) {
        let byte = 0;
        let bitPos = 7;
        
        for (let x = 0; x < width; x++) {
            const pixel = pattern[y][x];
            if (pixel === 0) {
                byte |= (1 << bitPos); // Set bit for transparent pixels
            }
            bitPos--;
            
            if (bitPos < 0 || x === width - 1) {
                maskData.writeUInt8(byte, maskOffset++);
                byte = 0;
                bitPos = 7;
            }
        }
        
        // Pad to byte boundary
        while (maskOffset % maskBytesPerRow !== 0) {
            maskData.writeUInt8(0, maskOffset++);
        }
    }
    
    return Buffer.concat([bitmapHeader, pixelData, maskData]);
}

// Main function to create the favicon
function createFavicon() {
    console.log('Creating favicon.ico with letter "G"...');
    
    // Create the bitmap data
    const bitmapData = createGBitmap();
    
    // Create ICO file structure
    const header = createIcoHeader(1); // 1 image
    const directoryEntry = createIcoDirectoryEntry(
        16,                    // width
        16,                    // height
        0,                     // color count (0 for true color)
        0,                     // reserved
        1,                     // planes
        32,                    // bits per pixel
        bitmapData.length,     // image size
        6 + 16                 // offset (header + directory entry)
    );
    
    // Combine all parts
    const icoFile = Buffer.concat([header, directoryEntry, bitmapData]);
    
    // Ensure public directory exists
    const publicDir = path.join(__dirname, 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write the favicon file
    const faviconPath = path.join(publicDir, 'favicon.ico');
    fs.writeFileSync(faviconPath, icoFile);
    
    console.log(`Favicon created successfully at: ${faviconPath}`);
    console.log(`File size: ${icoFile.length} bytes`);
}

// Run the script
if (require.main === module) {
    createFavicon();
}

module.exports = { createFavicon };