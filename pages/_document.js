import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
            <div className="flex w-[108rem] flex-none justify-end">
              <picture>
                <source
                  srcSet="https://tailwindcss.com/_next/static/media/docs@30.beeb08605f12f699c5abc3814763b65e.avif"
                  type="image/avif"
                />
                <img
                  src="https://tailwindcss.com/_next/static/media/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png"
                  alt=""
                  className="w-[71.75rem] max-w-none flex-none dark:hidden"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.77f062b5fd90f0d2cd4752cd9a8649c8.avif"
                  type="image/avif"
                />
                <img
                  src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png"
                  alt=""
                  className="hidden w-[90rem] max-w-none flex-none dark:block"
                />
              </picture>
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
