'use client';

import { ConfigProvider } from 'antd';
// import { StyleProvider } from '@ant-design/cssinjs';
import Navbar from "@/components/Navbar";

const AntdRegistry = ({ children }) => {
  return (
        <ConfigProvider>
          {/* <StyleProvider hashPriority="high"> */}
            <Navbar />
            {children}
          {/* </StyleProvider> */}
        </ConfigProvider>
  )
  ;
};

export default AntdRegistry;


// 'use client';

// import React from 'react';
// import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
// import { useServerInsertedHTML } from 'next/navigation';

// const AntdRegistry = ({ children }) => {
//   const cache = React.useMemo(() => createCache(), []);
//   const isServerInserted = React.useRef(false);

//   useServerInsertedHTML(() => {
//     // avoid duplicate css insert
//     if (isServerInserted.current) {
//       return null;
//     }
//     isServerInserted.current = true;
//     return <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />;
//   });

//   return <StyleProvider cache={cache}>{children}</StyleProvider>;
// };

// export default AntdRegistry;
