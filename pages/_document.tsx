import Document, { Html, Head, Main, NextScript } from 'next/document'

export async function getStaticProps() {
  return { 
    isDevelopment: process.env.NODE_ENV === 'development'
  }
}

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {
            this.props.isDevelopment && <script src="http://localhost:8097"></script>
          }          
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument