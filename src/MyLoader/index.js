import React from 'react';
import ContentLoader from 'react-content-loader';

function MyLoader(props) {
  return(
    <ContentLoader
            speed={1}
            width={272}
            height={102}
            viewBox="0 0 272 104"
            backgroundColor="#ddc6f3ce"
            foregroundColor="#ecebeb"
            {...props}
        >

            <rect x="30" y="28" rx="5" ry="5" width="30" height="30" />
            <rect x="30" y="68" rx="5" ry="5" width="30" height="30" />

            <rect x="72" y="28" rx="5" ry="5" width="276" height="30" />
            <rect x="72" y="68" rx="5" ry="5" width="276" height="30" />
        </ContentLoader>
  );
}

export { MyLoader };