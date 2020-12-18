import React from "react";
import PropTypes from "prop-types";
import { Tabs } from "antd";
import { get } from "lodash";

// import Stage from "../Stage";

const { TabPane } = Tabs;

export default function VotingTabs({ items, jury }) {
    return (
        <Tabs
            size={"large"}
            defaultActiveKey={"2"}
        >
            {
                items.map((item, idx) => {
                    return (
                        <TabPane
                            tab={get(item, "stage_name", "")}
                            key={idx}
                        >
                            {/*<Stage item={item} jury={jury}/>*/}
                        </TabPane>
                    );
                })
            }
        </Tabs>
    );
}

VotingTabs.propTypes = {
    items: PropTypes.array,
    jury: PropTypes.array,
};
VotingTabs.defaultProps = {
    items: [],
    jury: [],
};
