import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import marked from 'marked';
import mkdirp from 'async-mkdirp';

import Index from './tpl/index';
import parseContent from './content-parser';

const renderHTML = async () => {
    const contents = await parseContent();
    contents.forEach(content => {
        if (!content.attributes || !content.attributes.filename) {
            console.warn('missing required frontmatter');
            return;
        }
        const body = marked(content.body);
        const html = ReactDOMServer.renderToStaticMarkup(<Index content={body} {...content.attributes} />);
        const output = `${path.resolve(__dirname, 'dist', ...content.attributes.filename.split('/'))}`;

        return writeHTML(html, output);
    });
}

const writeHTML = async (html, output) => {
    try {
        let dir = await mkdirp(path.dirname(output));
        fs.writeFile(output, html, 'utf8', (err) => {
            if(err) throw new Error(`Unable to write ${output}`);
            console.log(`Wrote ${output} to file`);
            return;
        });
    } catch (err) {
        console.error(err);
        return;
    }
}

renderHTML();
