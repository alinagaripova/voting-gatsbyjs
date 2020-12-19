import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Button, notification, Progress } from "antd";

import DetailModal from "./DetailModal";
import VoteModal from "./VoteModal";

import "./Projects.scss";
import projects from "./projects";
//todo: add projects to context

export default function VoteProject({ className }) {

    function generateState(stateName) {
        switch (stateName) {
            case "detailOpened":
                return {
                    detailModal: true,
                    voteModal: false,
                };
            case "voteOpened":
                return {
                    detailModal: false,
                    voteModal: true,
                };
            default:
                return {
                    detailModal: false,
                    voteModal: false,
                };
        }
    }

    const [modal, setModal] = useState({
        machine: generateState("default"),
        voted: false,
        title: "",
        teaser: "",
        author: "",
        src: "",
        alt: "",
        btnLabel: "Проголосовать",
        competitionId: null,
    });

    const voted = get(modal, "voted", false);
    const title = get(modal, "title", "");
    const teaser = get(modal, "teaser", "");
    const author = get(modal, "author", "");
    const src = get(modal, "src", "");
    const alt = get(modal, "alt", "");
    const btnLabel = get(modal, "btnLabel", "");
    const competitionId = get(modal, "competitionId", "");

    function addVote(id, title) {
        localStorage.setItem("competitionId", id);
        localStorage.setItem("voted", true);

        setModal({
            machine: generateState("voteOpened"),
            voted: true,
            btnLabel: "Вы проголосовали",
            competitionId: id,
        });

        notification.success({
            message: `Вы проголосовали за ${title}`,
        });

    }

    useEffect(() => {
        const competitionId = localStorage.getItem("competitionId");
        const voted = localStorage.getItem("voted");

        setModal({
            machine: generateState("default"),
            voted,
            btnLabel: voted ? "Вы проголосовали" : "Проголосовать",
            competitionId,
        });
    }, []);

    return (
        <div className={"row project-list"}>
            {
                projects && projects.map(({ main_image, title, teaser, author, id, votes }, idx) => {
                    const src = get(main_image, "src", "");

                    return (
                        <div
                            key={`project-list-item-${idx}`}
                            className={`col-12 col-md-4 project-list__item d-flex flex-column justify-content-between align-items-center ${className}`}
                        >
                            <div
                                className={"project-list__image-block mb-3"}
                                onClick={() => setModal({
                                    machine: generateState("detailOpened"),
                                    voted,
                                    title,
                                    teaser,
                                    author,
                                    src,
                                    alt,
                                    btnLabel,
                                    competitionId,
                                })}
                            >
                                <img
                                    src={src}
                                    alt={alt}
                                    className={"project-list__image"}
                                />
                            </div>

                            <p className={"project-list__title mb-3 h4"}>
                                {title}
                            </p>

                            <Button
                                type="primary"
                                className={"mb-3 "}
                                disabled={voted}
                                icon={competitionId == id && "down-circle"}
                                onClick={() => {
                                    addVote(id, title);
                                }}
                            >
                                {btnLabel}
                            </Button>

                            <div className={"project-list__progress-bar d-flex flex-column align-items-end"}>
                                <div className={"h4"}>
                                    {votes}%
                                </div>
                                <Progress percent={votes} showInfo={false} />
                                <div
                                    className={"project-list__btn_detail"}
                                    onClick={() => setModal({
                                        machine: generateState("detailOpened"),
                                        voted,
                                        title,
                                        teaser,
                                        author,
                                        src,
                                        alt,
                                        btnLabel,
                                        competitionId,
                                    })}
                                >
                                    Подробнее
                                </div>
                            </div>
                        </div>
                    );
                })
            }

            <DetailModal
                page_title_full={title}
                isModal={modal.machine.detailModal}
                setModal={() => setModal({
                    machine: generateState("default"),
                    voted,
                    title,
                    teaser,
                    author,
                    src,
                    alt,
                    btnLabel,
                    competitionId,
                })}
                author={author}
                teaser={teaser}
                src={src}
                alt={alt}
            />

            <VoteModal
                page_title_full={title}
                isModal={modal.machine.voteModal}
                setModal={() => setModal({
                    machine: generateState("default"),
                    voted,
                    btnLabel,
                    competitionId,
                })}
            />

        </div>
    );
}
VoteProject.propTypes = {
    className: PropTypes.string,
};

VoteProject.defaultProps = {
    className: "",
};
