import React from 'react';
import FooComponent from './../components/foo-component.jsx';

class Index extends React.Component {

  render() {
    const { title, author, date, categories, tags, content } = this.props ;
    const html = { __html: content };

      return (
        <html>
          <head>
            <title>{title}</title>
          </head>
          <body>
            <h1>{title}</h1>
            <h2>By: {author}</h2>
            <p>Written on {date}</p>
            <div dangerouslySetInnerHTML={html} />
            <div>
              <h1>Filed Under</h1>
              <ul>
                {categories.map((cat, index) => <li key={index}>{cat}</li>)}
              </ul>
            </div>
            <div id="foo-component">
              <div>
                <FooComponent />
              </div>
            </div>
            <script src="./js/client.bundle.js" />
          </body>
        </html>
      );
  }
}

export default Index;