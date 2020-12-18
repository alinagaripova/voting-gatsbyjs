import React from "react";
import PropTypes from "prop-types";

import "./textblock.scss";

export function TextBlock({ title, desc, children }) {
    return (
        <div className={"row container"}>
            <div className={`col text-block`}>
                    <h2 className={"h1 text-block__title"}>
                        {title}
                    </h2>
                {desc && (
                    <div className={"text text-block__description"}>
                        {desc}
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}

TextBlock.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

TextBlock.defaultProps = {
    title: "",
    desc: "",
    children: [],
};

export function TextBlockMedia({ title, desc, children, image }) {
    return (
        <div className={"row container"}>
            <div className={`col text-block`}>
                    <h2 className={"h1 text-block__title"}>
                        {title}
                    </h2>
                <div className={"text-block__body row"}>
                    {image && (
                        <div
                            className={`text-block__image col-12 col-md-6`}
                            // style={{
                            //     "right": "left",
                            //     "margin": ".5rem 2rem 1rem 0",
                            // }}
                        >
                            <img src={image} alt="image_name"/>
                        </div>
                    )}
                    {desc && (
                        <div className={"text text-block__description col-12 col-md-6"}>
                            {desc}
                        </div>
                    )}
                </div>
                {children}
            </div>
        </div>
    );
}

TextBlockMedia.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    image: PropTypes.string
};

TextBlockMedia.defaultProps = {
    title: "",
    desc: "",
    image: "",
    children: [],
};
