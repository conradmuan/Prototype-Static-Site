import React from 'react';

class Index extends React.Component {
  render() {
  const { content } = this.props ;
  const html = { __html: content };

    return (
      <html>
        <head>
          <title>Hello world</title>
        </head>
        <body>
          <div dangerouslySetInnerHTML={html} />
        </body>
      </html>
    );
  }
}

export default Index;