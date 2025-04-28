import * as React from "react";
import Section from "./Section";
import LargeContent from "./LargeContent";
import { Input, Select, Validation } from "../../../src";

const ModalSection = ({ modal }) => {
    const buttons = [
        {
            label: "Basic Modal",
            onClick: () =>
                modal.show({
                    content: <LargeContent />,
                    title: "Test Modal",
                    width: 400,
                    cssClass: "test",
                }),
        },
        {
            label: "Always Centered",
            onClick: () =>
                modal.show({
                    content: <div>This modal will always be centered irrespective of global config!</div>,
                    title: "Always Centered",
                    width: 400,
                    centered: true,
                }),
        },
        {
            label: "Never Centered",
            onClick: () =>
                modal.show({
                    content: <div>This modal will never be centered irrespective of global config!</div>,
                    title: "Never Centered",
                    width: 400,
                    centered: false,
                }),
        },
        {
            label: "Alert",
            onClick: () => modal.showAlert("This is an alert dialog!"),
        },
        {
            label: "Confirm",
            onClick: () =>
                modal.showConfirm(
                    {
                        content: <div>Please confirm!</div>,
                        width: 400,
                        onClose: () => console.log("closed"),
                    },
                    () => {
                        modal.getCurrent().remove();
                        alert("you said yes");
                    },
                ),
        },
        {
            label: "Actions",
            onClick: () =>
                modal.showActions(
                    {
                        content: <div>Click one of the call to action!</div>,
                        width: 400,
                        onClose: () => console.log("closed"),
                        closeBtn: true,
                    },
                    [
                        {
                            content: "Action 1",
                            onClick: () => alert("You clicked action 1"),
                            type: "primary",
                            closeOnClick: true,
                        },
                        {
                            content: "Action 2",
                            onClick: () => alert("You clicked action 2"),
                            type: "danger",
                            closeOnClick: true,
                        },
                    ],
                ),
        },
        {
            label: "Modal with validation",
            onClick: () =>
                modal.showActions(
                    {
                        content: (
                            <form id={"test-form"}>
                                <Input
                                    id={"name"}
                                    type={"text"}
                                    name={"name"}
                                    className={"form-control"}
                                    placeholder={"Name"}
                                    validations={{
                                        required: true,
                                        minLength: {
                                            value: 3,
                                        },
                                    }}
                                    validateOnChange
                                />
                                <Input
                                    id={"email"}
                                    type={"text"}
                                    name={"email"}
                                    className={"form-control"}
                                    placeholder={"Email"}
                                    validations={{ required: true, email: true }}
                                    validateOnChange
                                />
                                <Input
                                    id={"age"}
                                    type={"text"}
                                    name={"age"}
                                    className={"form-control"}
                                    placeholder={"Age"}
                                    validations={{ required: true, digits: true }}
                                    validateOnChange
                                />
                                <Select
                                    id={"agree"}
                                    type={"text"}
                                    name={"agree"}
                                    className={"form-control"}
                                    validations={{ required: true }}
                                    validateOnChange>
                                    <option></option>
                                    <option>Yes</option>
                                </Select>
                            </form>
                        ),
                        width: 400,
                        title: "Modal with Validation",
                    },
                    [
                        {
                            content: "Save",
                            onClick: () => {
                                const validation = new Validation({
                                    form: { id: "test-form" },
                                });
                                const { isValid, values } = validation.validateForm<{
                                    name: string;
                                    age: number;
                                }>();
                                if (isValid) {
                                    modal.getCurrent().remove();
                                    alert(JSON.stringify(values));
                                }
                            },
                            type: "primary",
                        },
                    ],
                ),
        },
        {
            label: "Overlay",
            onClick: () =>
                modal.showActions(
                    {
                        content: <div>Click to show overlay!</div>,
                        width: 400,
                        title: "Overlay",
                    },
                    [
                        {
                            content: "Show Overlay",
                            onClick: () => {
                                const overlay = modal.getCurrent().overlay;
                                overlay.show(
                                    <div>
                                        Are you sure?{" "}
                                        <button className={"btn btn-primary"} onClick={overlay.hide}>
                                            Yes
                                        </button>
                                    </div>,
                                );
                            },
                            type: "primary",
                        },
                    ],
                ),
        },
        {
            label: "Overlay with confirm",
            onClick: () =>
                modal.showActions(
                    {
                        content: <div>Click to show overlay!</div>,
                        width: 600,
                        title: "Overlay",
                    },
                    [
                        {
                            content: "Show Overlay",
                            confirm: "Are you sure you want to do this?",
                            type: "primary",
                            onClick: () => alert("confirmed"),
                            closeOnClick: true,
                        },
                    ],
                ),
        },
        {
            label: "Overlay with manual confirm",
            onClick: () =>
                modal.show({
                    content: (
                        <div>
                            Click to delete{" "}
                            <button
                                className={"btn btn-primary"}
                                onClick={() => {
                                    modal
                                        .getCurrent()
                                        .overlay.showConfirm("Are you sure you want to delete?", () =>
                                            alert("deleted"),
                                        );
                                }}>
                                Delete
                            </button>
                        </div>
                    ),
                    width: 400,
                    title: "Overlay",
                }),
        },
        {
            label: "Overlay with actions",
            onClick: () =>
                modal.show({
                    content: (
                        <div>
                            Click to delete{" "}
                            <button
                                className={"btn btn-primary"}
                                onClick={() => {
                                    modal.getCurrent().overlay.showActions("Pick an action", "Select an action", [
                                        {
                                            content: "Action 1",
                                            type: "success",
                                            onClick: () => alert("action 1"),
                                            closeOnClick: true,
                                        },
                                        {
                                            content: "Action 2",
                                            type: "secondary",
                                            onClick: () => alert("action 2"),
                                            closeOnClick: true,
                                        },
                                    ]);
                                }}>
                                Delete
                            </button>
                        </div>
                    ),
                    width: 400,
                    title: "Overlay",
                }),
        },
        {
            label: "Update existing modal",
            onClick: () =>
                modal.show({
                    content: (
                        <div>
                            Click to update
                            <br />
                            <button
                                className={"btn btn-primary"}
                                onClick={() => {
                                    modal.getCurrent().update({
                                        width: 400,
                                        footerContent: "Updated footer",
                                        content: "Updated content",
                                        actions: [
                                            {
                                                content: "Update",
                                                type: "primary",
                                                onClick: () => alert("updated"),
                                                closeOnClick: true,
                                                confirm: "Are you sure?",
                                            },
                                        ],
                                    });
                                }}>
                                Update
                            </button>
                        </div>
                    ),
                    width: 600,
                    title: "Overlay",
                }),
        },
    ];

    return <Section buttons={buttons} title={"Modal"} />;
};

export default ModalSection;
