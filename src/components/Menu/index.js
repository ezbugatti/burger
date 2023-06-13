import React, { Fragment } from "react";

import css from "./style.module.css";
import MenuItem from "../MenuItem";
import { connect } from "react-redux";
const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {props.userId ? (
        <Fragment>
          <MenuItem exact link="/">
            ШИНЭ ЗАХИАЛГА
          </MenuItem>

          <MenuItem link="/orders">ЗАХИАЛГАНУУД</MenuItem>
          <MenuItem link="/logout">ГАРАХ</MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem link="/login">НЭВТРЭХ</MenuItem>
          <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
