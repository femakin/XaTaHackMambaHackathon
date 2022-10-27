import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = (props) => {
    // const { getFieldDecorator, validateFields, setFieldsValue } = props.form;

    const [textVal, setTextVal] = useState("");

    const onChangeText = (text) => {
        console.log("called");
        text = text !== "<p><br></p>" ? text : "";
        // setFieldsValue({ input: text });
        setTextVal(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                console.log("State value", textVal);
            }
        });
    };

    const quillToolbar = {
        toolbar: ["bold", "italic", { list: "bullet" }, "link"]
    };

    return (
        // <Form layout="inline" onSubmit={handleSubmit}>
        //     <Form.Item>
        //         {getFieldDecorator("input", {
        //             rules: [{ required: true }]
        //         })(<Input.TextArea style={{ display: "none" }} />)}
        //         <ReactQuill
        //             className="question-form__rich-text"
        //             modules={quillToolbar}
        //             defaultValue={textVal}
        //             onChange={onChangeText}
        //         />
        //     </Form.Item>
        //     <Form.Item>
        //         <Button htmlType="submit">Submit</Button>
        //     </Form.Item>

        //         f



        // </Form>

        <div>
            <form onSubmit={handleSubmit} >
                <textarea style={{ display: "none" }} />
                <ReactQuill
                    className="question-form__rich-text"
                    modules={quillToolbar}
                    defaultValue={textVal}
                    onChange={onChangeText}
                />

                <button
                    // onClick={() => {
                    //   return setActive("");
                    // }}
                    type="submit"
                    className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                >
                    Submit
                </button>

            </form>



        </div>


    );
};

// export const RichText = Form.create()(Quill);


export default Quill
