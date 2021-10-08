// import Layout from '../components/Layout'
import '../styles/globals.css'

import Layout from '../layouts/Admin'
import Router from "next/router";

// import "assets/css/nextjs-material-dashboard.css?v=1.1.0";

/* See if this code block can be eliminated
Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});

Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
*/

function MyApp({ Component, pageProps }) {  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
   )
}

export default MyApp
