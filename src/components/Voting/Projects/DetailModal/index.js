import React, { useContext } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";


export default function DetailModal({ title, isModal, setModal, author, teaser, src, alt }) {

    return (
        <Modal
            title={title}
            visible={isModal}
            centered
            onCancel={setModal}
            footer={null}
        >
            <div className={"d-flex flex-column justify-content-between"}>
                <img
                    src={src}
                    alt={alt}
                    height={"auto"}
                    width={"100%"}
                    className={"mb-2"}
                />
                <div className={"mb-3"}>
                    Автор: {author}
                </div>
                <div>
                    {teaser}
                </div>
            </div>
        </Modal>
    );
}

DetailModal.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    teaser: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    isModal: PropTypes.bool,
    setModal: PropTypes.func,
};

DetailModal.defaultProps = {
    title: "",
    author: "",
    teaser: "",
    src: "",
    alt: "",
    isModal: false,
    setModal: () => {},
};
