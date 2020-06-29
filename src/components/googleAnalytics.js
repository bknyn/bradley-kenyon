const GoogleAnalytics = () => {
  const gaID = 'UA-57123975-3';
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gaID}');
          `
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
