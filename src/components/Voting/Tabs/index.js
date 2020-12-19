import React from "react";
import PropTypes from "prop-types";
import { Tabs } from "antd";
import { get } from "lodash";

import Stage from "../Stage";

const { TabPane } = Tabs;

export default function VotingTabs({ items }) {
    return (
        <Tabs
            size={"large"}
            defaultActiveKey={"2"}
        >
            {
                items.map((item, idx) => {
                    console.log(idx)
                    return (
                        <TabPane
                            tab={get(item, "stage_name", "")}
                            key={idx}
                            disabled={idx === 3}
                        >
                            <Stage
                                item={item}
                            />
                        </TabPane>
                    );
                })
            }
        </Tabs>
    );
}

VotingTabs.propTypes = {
    items: PropTypes.array,
};
VotingTabs.defaultProps = {
    items: [],
};
