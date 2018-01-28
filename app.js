import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import marked from 'marked';

import Index from './tpl/index';
import rawContent from './content-parser';

const content = marked(rawContent.body);
const html = ReactDOMServer.renderToStaticMarkup(<Index content={content} />);
const output = `${path.resolve(__dirname, 'dist')}/index.html`;

fs.writeFileSync(output, html, 'utf-8');
