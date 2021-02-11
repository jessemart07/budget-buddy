import React from "react";
import classes from "./Loader.module.css";
function Loader() {
  return (
    <React.Fragment>
      <div className={classes.loaderDiv}>
        <div className={classes.spinner}>
          <div className={classes.loader}>
            <div></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Loader;
