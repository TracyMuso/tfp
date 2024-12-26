// import { useEffect } from 'react';

// const HireMeWidget = () => {
//   useEffect(() => {
//     const d = document;
//     const s = 'script';
//     const useSSL = 'https:' === document.location.protocol;
//     const js = d.createElement(s);
//     const where = d.getElementsByTagName(s)[0];
//     js.src = (useSSL ? 'https:' : 'http:') + '//www.peopleperhour.com/hire/834277904/11531838.js?width=245&height=320&orientation=vertical&theme=dark&rnd=' + parseInt(Math.random() * 10000, 10);
//     try {
//       where.parentNode.insertBefore(js, where);
//     } catch (e) {
//       if (typeof console !== 'undefined' && console.log && e.stack) {
//         console.log(e.stack);
//       }
//     }
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return <div id="pph-hireme"></div>;
// };

// export default HireMeWidget;
export {};
