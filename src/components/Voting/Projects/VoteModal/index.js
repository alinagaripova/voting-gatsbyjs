import React from "react";
import { Modal, Button, notification, Form, Radio, Select, Input } from "antd";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

const { Option } = Select;

export function VoteModal({ form, title, isModal, setModal }) {
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 17 },
    };

    const width = isMobile ? 300 : 1020;

    function updateVoterData() {
        setModal();

        notification.success({
            message: "Форма отправлена",
        });
    }

    return (
        <Modal
            title={title}
            visible={isModal}
            centered
            width={width}
            onCancel={setModal}
            footer={[
                <Button key="back" onClick={setModal}>
                    Выход
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={updateVoterData}
                >
                    Отправить
                </Button>,
            ]}
        >
            <div className={"py-3 px-3"}>
                <div className={"mb-4"}>
                    Спасибо за Ваш голос! <br/>
                    Мы будем признательны, если Вы ответите на несколько вопросов.
                    Это не займет у Вас больше минуты, а Ваши ответы помогут нам в дальнейшем.
                </div>

                <Form {...formItemLayout} layout={"vertical"}>
                    <Form.Item label={"Пол"}>
                        {getFieldDecorator("gender")(
                            <Radio.Group>
                                <Radio value="man">женский</Radio>
                                <Radio value="woman">мужской</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item label="Возраст" hasFeedback>
                        {getFieldDecorator("age")(
                            <Select placeholder="Выберите возраст">
                                <Option value="18">менее 18 лет</Option>
                                <Option value="18-25">18-25 лет</Option>
                                <Option value="26-35">26-35 лет</Option>
                                <Option value="36-44">36-44 лет </Option>
                                <Option value="45-54">45-54 лет</Option>
                                <Option value="55-64">55-64 лет</Option>
                                <Option value="65+">65 и более</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="Город" {...formItemLayout}>
                        {getFieldDecorator("city")(
                            <Input placeholder="Введите город" />,
                        )}
                    </Form.Item>
                    <Form.Item label="Деятельность" hasFeedback>
                        {getFieldDecorator("activity")(
                            <Select placeholder="Выберите род деятельности">
                                <Option value="Студент">Студент</Option>
                                <Option value="Работающий по найму">Работающий по найму</Option>
                                <Option value="Предприниматель">Предприниматель</Option>
                                <Option value="Безработный">Безработный</Option>
                                <Option value="Пенсионер">Пенсионер</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label={"Дети"}>
                        {getFieldDecorator("kids")(
                            <Radio.Group>
                                <Radio value="0">детей нет</Radio>
                                <Radio value="1">один ребенок</Radio>
                                <Radio value="2-5">2-5 детей</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
}

export default Form.create({ name: "voting" })(VoteModal);

VoteModal.propTypes = {
    title: PropTypes.string,
    isModal: PropTypes.bool,
    setModal: PropTypes.func,
    form: PropTypes.object,
};

VoteModal.defaultProps = {
    title: "",
    isModal: false,
    setModal: () => {},
    form: PropTypes.object,
};
