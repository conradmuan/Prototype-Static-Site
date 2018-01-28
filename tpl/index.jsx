import React from 'react';

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
        </body>
      </html>
    );
  }
}

export default Index;