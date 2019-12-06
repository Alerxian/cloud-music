import React, { memo, forwardRef } from "react";
import PropTypes from "prop-types";

import { HeaderContainer, Marque } from "./style";

const Header = forwardRef((props, ref) => {
  const { handleClick, title, isMarque } = props;
  return (
    <HeaderContainer ref={ref}>
      <i className="iconfont back" onClick={handleClick}></i>
      {isMarque ? (
        <Marque>
          <h1>{title}</h1>
        </Marque>
      ) : (
        <h1>{title}</h1>
      )}
    </HeaderContainer>
  );
});

Header.defaultProps = {
  handleClick: () => {},
  title: "标题",
  isMarque: false
};

Header.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
  isMarquee: PropTypes.bool
};

export default memo(Header);
