import React from "react";
import Router from "next/router";

export default function Index() {
  console.log("Index pre-useEffect");
  React.useEffect(() => {
    console.log("Index post-useEffect");
    Router.push("/admin/dashboard");
  });

  return <div />;
}
