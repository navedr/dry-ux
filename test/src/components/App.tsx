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
    useDimensions,
} from "../../../src";
import "../css/site.css";

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

const Section = React.memo(({ children }) => {
    const ref = React.useRef(null);
    const { width, height } = useDimensions(ref);

    return (
        <section ref={ref}>
            <div style={{ float: "right" }}>
                {width}x{height}px
            </div>
            {children}
        </section>
    );
});

const LargeContent = () => (
    <div>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will
        be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
        as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
        the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
        comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
        reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.
        Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
        over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc.
    </div>
);

const Content = React.memo(() => {
    const { modal, loader, customLoader, prompt, viewport } = useDryUxContext();
    const { width, height } = useDimensions();

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

            <Section>
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
                                                content: <LargeContent />,
                                                title: "Test Modal",
                                                width: 400,
                                                cssClass: "test",
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
                                <td>
                                    <button
                                        type={"button"}
                                        className={"btn btn-primary"}
                                        onClick={() =>
                                            modal.show({
                                                content: (
                                                    <div>
                                                        Click to delete{" "}
                                                        <button
                                                            className={"btn btn-primary"}
                                                            onClick={() => {
                                                                modal
                                                                    .getCurrent()
                                                                    .overlay.showConfirm(
                                                                        "Are you sure you want to delete?",
                                                                        () => alert("deleted"),
                                                                    );
                                                            }}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                ),
                                                width: 400,
                                                title: "Overlay",
                                            })
                                        }>
                                        Overlay with manual confirm
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
                                                        Click to delete{" "}
                                                        <button
                                                            className={"btn btn-primary"}
                                                            onClick={() => {
                                                                modal
                                                                    .getCurrent()
                                                                    .overlay.showActions(
                                                                        "Pick an action",
                                                                        "Select an action",
                                                                        [
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
                                                                        ],
                                                                    );
                                                            }}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                ),
                                                width: 400,
                                                title: "Overlay",
                                            })
                                        }>
                                        Overlay with actions
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
                                            })
                                        }>
                                        Update existing modal
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>
            <Section>
                <h3>Loader</h3>
                <button
                    className={"btn btn-primary"}
                    onClick={() => {
                        loader.show();
                        setTimeout(() => loader.hide(), 5000);
                    }}>
                    Show (5 secs)
                </button>
            </Section>
            <hr />
            <Section>
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
            </Section>
            <hr />
            <Section>
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
            </Section>
            <hr />
            <Section>
                <h3>Prompts</h3>
                <button
                    className={"btn btn-primary"}
                    onClick={() => prompt.showConfirm({ content: "This is a test prompt" }, () => {})}>
                    Show Prompt
                </button>
            </Section>
            <hr />
            <Section>
                <h3>DOM</h3>
                <p>
                    Viewport: {viewport.current} [XS: {viewport.isXS ? "Yes" : "No"}] [SM:{" "}
                    {viewport.isSM ? "Yes" : "No"}] [MD: {viewport.isMD ? "Yes" : "No"}] [LG:{" "}
                    {viewport.isLG ? "Yes" : "No"}]
                </p>
                <p>
                    Dimensions: {width}x{height}px
                </p>
            </Section>
        </div>
    );
});

const App = React.memo(() => {
    const [centered, setCentered] = React.useState(false);
    const [largeContent, toggleLargeContent] = React.useState(false);

    return (
        <ErrorBoundary>
            <DryUXProvider noRenderer viewportDetect>
                <div className={"container"}>
                    <div className="row">
                        <div className="col-12">
                            <label>
                                <input type={"checkbox"} onChange={e => setCentered(e.target.checked)} />
                                &nbsp;Centered Modals
                            </label>
                            <label>
                                <input type={"checkbox"} onChange={e => toggleLargeContent(e.target.checked)} />
                                &nbsp;Large Content
                            </label>
                            {largeContent && (
                                <>
                                    <LargeContent />
                                    <LargeContent />
                                </>
                            )}
                            <Content />
                        </div>
                    </div>
                    <DryUXRenderer modalConfig={{ defaultModalStyles: true, centered }} />
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
