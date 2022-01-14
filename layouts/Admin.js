import React from "react";
import { useRouter } from "next/router";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";

// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import Sidebar from "components/Sidebar/SidebarActiveLink.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

import Meta from 'components/Meta'

let ps;

// added JSS
function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);
}

export default function Admin({ children, ...rest }) {
  // used for checking current route
  const router = useRouter();

  // display beakpoints
  const theme = useTheme();
  console.log("Theme Breakpoints: " + JSON.stringify(theme.breakpoints.values))
  // Theme Breakpoints: {"xs":0,"sm":600,"md":960,"lg":1280,"xl":1920}

  // styles
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("purple");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleImageClick = (image) => {
    setImage(image);
  };

  const handleColorClick = (color) => {
    setColor(color);
  };

  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  /* children = "index.js" ? classes.main : classes.container */

  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    // if Windows OS
    if (navigator.platform.indexOf("Win") > -1) {
      console.log("Main Panel activated");
      // added JSS
      /*
      console.log("App Version: " + navigator.appVersion);
      console.log("Platform: " + navigator.platform);
      navigator.geolocation.getCurrentPosition(showPosition);
      /*
      App Version: 5.0 (Windows) Admin.js:87:14
      Platform: Win32 Admin.js:88:14
      Latitude: 14.6143 react_devtools_backend.js:4049:25
      Longitude: 121.0419 react_devtools_backend.js:4049:25
      */
      /*
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      */
      document.body.style.overflow = "auto";
      // document.body.style.overflow = "hidden";
    }

    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    // This happens when another route is activated
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        console.log("Main Panel deactivated");
        // ps.destroy();
      }

      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <>
      <Meta />
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"Cedar ITT"}
          logo={logo}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          {...rest}
        />
        {/*<Header /> */}
        <div className={classes.mainPanel} ref={mainPanel}>
          <Navbar
            routes={routes}
            handleDrawerToggle={handleDrawerToggle}
            {...rest}
          />
          <div className={classes.content}>
            <div className={router.pathname == "/" ? classes.main : classes.container}>{children}</div>
          </div>
          <Footer /> : null
          {/*<FixedPlugin
            handleImageClick={handleImageClick}
            handleColorClick={handleColorClick}
            bgColor={color}
            bgImage={image}
            handleFixedClick={handleFixedClick}
            fixedClasses={fixedClasses}
          /> */}
        </div>
      </div>
    </>
  );
}
