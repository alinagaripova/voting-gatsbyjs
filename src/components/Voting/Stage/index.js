import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Icon } from "antd";
import "moment/locale/ru";

import Contents from "../../Contents";
import VoteProject from "../Projects";
import { ContentBlock } from "../../Blocks/ContentBlock";
import { TextBlock } from "../../Blocks";
import "./Stage.scss";

const moment = require("moment");


export default function Stage({ item }) {
    const stage_name = get(item, "stage_name", "");
    const content_blocks = get(item, "content_blocks", []).slice(1);
    const body = get(item, "content_blocks[0].body", "");
    const title = get(item, "content_blocks[0].title", "");
    const project_display = get(item, "projects_display", false);

    const date_start = get(item, "date_start", "");
    const date_end = get(item, "date_end", "");
    const date_start_transformed = moment(date_start).locale("ru").format("D MMMM ");
    const date_end_transformed = moment(date_end).locale("ru").format("D MMMM YYYY");

    const state = new Date() >= new Date(date_start) && new Date() <= new Date(date_end);

    return (
        <ContentBlock key={"stage-content"}>
            <div className={"container"}>
                <div className={"stage row"}>
                    <div className={"stage__data col-12 col-lg-6"}>
                        <div className={"stage__info"}>
                            {
                                stage_name && (
                                    <div className={"stage__info_name"}>
                                        {stage_name}
                                    </div>
                                )
                            }
                            <div className={"stage__info_date h5"}>
                                {`${date_start_transformed} - ${date_end_transformed}`}
                            </div>
                        </div>
                        <div className={"stage__state mt-5"}>
                            <div className={"stage__state_item stage__state_icon"}>
                                <Icon
                                    type={state ? "caret-right" : "pause"}
                                    style={{
                                        fontSize: "16px",
                                        color: "#fff",
                                    }}
                                />
                            </div>
                            <div className={"stage__state_item stage__state_title"}>
                                Статус: {state ? "Активный" : "Завершен"}
                            </div>
                        </div>
                    </div>

                    <div className={"stage__content col-12 col-lg-6"}>
                        <TextBlock desc={body} title={title}/>
                    </div>
                </div>

                {content_blocks && <Contents items={content_blocks} />}

                {project_display && <VoteProject />}
            </div>
        </ContentBlock>
    );
}

Stage.propTypes = {
    item: PropTypes.array,
};

Stage.defaultProps = {
    item: {},
};
