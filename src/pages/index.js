import React from "react";
import { graphql } from "gatsby";
import { get } from "lodash";

import { ContentBlock } from "../components/Blocks/ContentBlock";
import Contents from "../components/Contents";
import VotingTabs from "../components/Voting/Tabs";

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        content_blocks {
                            body
                            type
                            media {
                                items {
                                    src
                                }
                            }
                        }
                        stages {
                            content_blocks {
                                body
                                title
                                type
                                media {
                                    items {
                                        src
                                    }
                                }
                            }
                            date_end
                            date_start
                            jury
                            projects_display
                            stage_name
                        }
                    }
                }
            }
        }
    }
`

export default function Main({data}) {

    const votingData =  get(data, "allMarkdownRemark.edges[0].node.frontmatter");
    const { title, content_blocks, stages } = votingData;

    return (
        <>
            <ContentBlock key={"main-content"} mount={title || content_blocks}>
                <div className={"container mt-5"}>
                    <h1 className={"h1"}>
                        {title}
                    </h1>
                    <Contents items={content_blocks}/>
                </div>
            </ContentBlock>
            <ContentBlock key={"voting-content"}>
                <div className={"container"}>
                    <VotingTabs
                        items={stages}
                    />
                </div>
            </ContentBlock>
        </>
    )
};
