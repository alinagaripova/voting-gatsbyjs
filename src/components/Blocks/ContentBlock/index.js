import React from "react";
import PropTypes from "prop-types";

export function ContentBlock({ children, className, style, mount }) {
    return mount ? (
        <section className={`content-block ${className}`} style={style}>
            {children}
        </section>
    ) : null;
}

ContentBlock.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    mount: PropTypes.bool,
};

ContentBlock.defaultProps = {
    children: <></>,
    className: "",
    style: {},
    mount: true,
};
