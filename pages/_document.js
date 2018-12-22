import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
          <style>
            {`
              body {
                position: relative;
                margin: 0;
                max-width: 600px;
              }
              .index {
                height: 100vh;
                background: rgb(12, 13, 17);
                opacity: .9;
              }
              .index-bg {
                z-index: -1;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 100vh;
                background-image: url(/static/bg.jpg);
                background-repeat: no-repeat;
                background-position: bottom center;
                background-size: cover;
              }
            `}
          </style>
        </Head>
        <body>
          <div className="index-bg"/>
          <div className="index" />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}