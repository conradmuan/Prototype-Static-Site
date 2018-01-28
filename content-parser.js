import fs from 'fs';
import path from 'path';

import fm from 'front-matter';
import readdir from 'recursive-readdir';

const filePath = `${path.resolve(__dirname, 'content')}/filename-example.md`;
const file = fs.readFileSync(filePath, 'utf-8');
const parsedFile = fm(file);

export default parsedFile;