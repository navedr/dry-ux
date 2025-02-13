import * as React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    DryUXProvider,
    DryUXRenderer,
    ErrorBoundary,
    useDryUxContext,
    DajaxiceFn,
    DajaxiceProxy,
    Validation,
    Input,
    Select,
} from "../../../src";

// https://urre.me/writings/test-local-npm-packages/

export const modules: DajaxiceModules = {};

export type DajaxiceModules = {
    employee?: {
        getDetails: DajaxiceFn<{ id: number }>;
    };
    organization?: {
        setName: DajaxiceFn<{ name: string }>;
        getName: DajaxiceFn;
        getCity: DajaxiceFn<void>;
    };
};

const Api = DajaxiceProxy<DajaxiceModules>({
    modules,
});

const Content = React.memo(() => {
    const { modal, loader, customLoader, prompt } = useDryUxContext();

    React.useEffect(() => {
        window["Dajaxice"] = new Proxy(
            {},
            {
                get(target, module: string) {
                    return new Proxy(
                        {},
                        {
                            get(target, method: string) {
                                return (
                                    onSuccess: (result) => void,
                                    args: any,
                                    options: { error_callback: (error) => void },
                                ) =>
                                    new Promise(resolve => {
                                        onSuccess({ module, method, args });
                                        resolve({});
                                    });
                            },
                        },
                    );
                },
            },
        );
    }, []);

    return (
        <div>
            <h2 className={"text-center"}>dry-ux tests</h2>
            <section>
                <h3>Modal</h3>
                <div>
                    <table className={"table"}>
                        <tbody>
                            <tr>
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() =>
                                            modal.show({
                                                content: <div>This is a modal!</div>,
                                                title: "Test Modal",
                                                width: 400,
                                            })
                                        }>
                                        Basic Modal
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() =>
                                            modal.show({
                                                content: (
                                                    <div>
                                                        This modal will always be centered irrespective of global
                                                        config!
                                                    </div>
                                                ),
                                                title: "Always Centered",
                                                width: 400,
                                                centered: true,
                                            })
                                        }>
                                        Always Centered
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() =>
                                            modal.show({
                                                content: (
                                                    <div>
                                                        This modal will never be centered irrespective of global config!
                                                    </div>
                                                ),
                                                title: "Never Centered",
                                                width: 400,
                                                centered: false,
                                            })
                                        }>
                                        Never Centered
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() => modal.showAlert("This is an alert dialog!")}>
                                        Alert
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() =>
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
                                            )
                                        }>
                                        Confirm
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() =>
                                            modal.showActions(
                                                {
                                                    content: <div>Click one of the call to action!</div>,
                                                    width: 400,
                                                    onClose: () => console.log("closed"),
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
                                            )
                                        }>
                                        Actions
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() =>
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
                                            )
                                        }>
                                        Modal with validation
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() =>
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
                                                                    <button
                                                                        className={"btn btn-primary"}
                                                                        onClick={overlay.hide}>
                                                                        Yes
                                                                    </button>
                                                                </div>,
                                                            );
                                                        },
                                                        type: "primary",
                                                    },
                                                ],
                                            )
                                        }>
                                        Overlay
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() =>
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
                                            )
                                        }>
                                        Overlay with confirm
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h3>Loader</h3>
                <button
                    className={"btn btn-primary"}
                    onClick={() => {
                        loader.show();
                        setTimeout(() => loader.hide(), 5000);
                    }}>
                    Show (5 secs)
                </button>
            </section>
            <hr />
            <section>
                <h3>Custom Loader</h3>
                <button
                    className={"btn btn-primary"}
                    onClick={() => {
                        customLoader.show();
                        setTimeout(() => customLoader.hide(), 5000);
                    }}>
                    Show (5 secs)
                </button>
                {customLoader.shown && <div className="text-center">Loading...</div>}
            </section>
            <hr />
            <section>
                <h3>Dajaxice</h3>
                <button
                    className={"btn btn-primary"}
                    onClick={() =>
                        Api.employee
                            .getDetails<{ name: string; id: number }>({ args: { id: 1 }, loader: true })
                            .then(res => {
                                console.log(res);
                            })
                    }>
                    Success call
                </button>
            </section>
            <hr />
            <section>
                <h3>Prompts</h3>
                <button
                    className={"btn btn-primary"}
                    onClick={() => prompt.showConfirm({ content: "This is a test prompt" }, () => {})}>
                    Show Prompt
                </button>
            </section>
        </div>
    );
});

const App = React.memo(() => {
    const [centered, setCentered] = React.useState(false);
    return (
        <ErrorBoundary>
            <DryUXProvider noRenderer>
                <div className={"container"}>
                    <div className="row">
                        <div className="col-12">
                            <label>
                                <input type={"checkbox"} onChange={e => setCentered(e.target.checked)} />
                                &nbsp;Centered Modals
                            </label>
                            <Content />
                        </div>
                    </div>
                    <DryUXRenderer modalConfig={{ defaultModalStyles: true, setBackdropHeight: false, centered }} />
                </div>
            </DryUXProvider>
        </ErrorBoundary>
    );
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("app"),
);
