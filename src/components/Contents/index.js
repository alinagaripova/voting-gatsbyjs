import React from "react";
import { get } from "lodash";
import PropTypes from "prop-types";

import { TextBlockMedia, TextBlock } from "../Blocks";

export default function Contents({ items }) {
    return items.map(({ title, body, media, type }, idx) => {
        const src = get(media, "items[0].src", "")
        switch (type) {
            case "Media":
                return (
                    <TextBlockMedia
                        title={title}
                        image={src}
                        desc={body}
                        orientation={type}
                    />
                );
            default:
                return (
                    <TextBlock
                        title={title}
                        desc={body}
                    />
                );
        }
    })
}

Contents.propTypes = {
    items: PropTypes.array,
};

Contents.defaultProps = {
    items: [],
};
