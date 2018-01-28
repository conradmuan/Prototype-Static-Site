import fs from 'fs';
import path from 'path';

import fm from 'front-matter';
import readdir from 'recursive-readdir';

const ContentDirectory = path.resolve(__dirname, 'content');

const getRawContent = async () => {
    try {
        let files = await readdir(ContentDirectory);
        return files;
    } catch(err) {
        console.error(err);
        return;
    }

}

const formatRawContent = (files) => {
    if (!Array.isArray(files)) {
        throw new Error('Expected files to be array (of files, duh)');
    }
    const parsedFiles = [];
    files.forEach(file => {
        const parsedFile = fm(fs.readFileSync(file, 'utf8'));
        if (parsedFile.attributes.filename) {
            parsedFile.attributes.filename = formatFileNameFromAttribute(parsedFile);
        } else {
            parsedFile.attributes.filename = formatFilenameFromFileName(file);
        }
        parsedFiles.push(parsedFile);
    });

    return parsedFiles;
}

const formatFileNameFromAttribute = (file) => {
    if (!file || !file.attributes || !file.attributes.filename) {
        throw new Error('Expected file.attributes.filename');
    }

    const attributes = file.attributes;
    const filename = attributes.filename;
    // Check for args in the filename
    const filenameParts = filename.split('/');
    const args = [];
    filenameParts.forEach(part => part.indexOf(':') !== -1 ? args.push(part.substr(1)) : null);
    
    // Match args in attributes
    if (args.length > 0) {
        args.forEach(arg => {
            if (!!attributes[arg]) {
                let index = filenameParts.indexOf(`:${arg}`);
                filenameParts[index] = sluggify(attributes[arg]);
            }
        });
    }

    return filenameParts.join('/');
}

const formatFilenameFromFileName = (file) => {

    const fileParts = file.split(ContentDirectory);
    const filename = fileParts[fileParts.length-1];
    const filenameParts = filename.split('.');
    let finalFilename;
    if (filenameParts.length === 1) {
        finalFilename = filenameParts[0];
    } else {
        filenameParts.pop();
        finalFilename = `${filenameParts.join()}.html`;
    }
    return finalFilename;
}

const sluggify = (string) => string.toLowerCase().split(' ').join('-');

const parseFiles = async () => {
    const files = await getRawContent();
    const parsedFiles = formatRawContent(files);
    return parsedFiles;
}

export default parseFiles;