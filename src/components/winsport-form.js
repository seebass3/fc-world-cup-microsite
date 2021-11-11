import React, {useState} from "react";
import {injectIntl, FormattedMessage} from "gatsby-plugin-react-intl"

const onSubmit = async(event, setSubmitText) => {
    event.preventDefault();
    setSubmitText("Submitting ...");
    const formElements = [...event.currentTarget.elements];
    const isValid = formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

    const validFormElements = isValid
        ? formElements
        : [];

    if (validFormElements.length < 1) {
        // or some other cheeky error message
        setSubmitText("It looks like you filled out too many fields!");
    } else {
        const filledOutElements = validFormElements.filter((elem) => !!elem.value).map((element) => encodeURIComponent(element.name) + "=" + encodeURIComponent(element.value)).join("&");

        await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: filledOutElements
        }).then(() => {
            setSubmitText("Successfully submitted! / Votre message a été envoyé avec succès !");
        }).catch((_) => {
            setSubmitText("There was an error with your submission, please email us using this address: snowrodeo@freestylecanada.ski");
        });
    }
};

const WinsportForm = ({intl}) => {
    const [submitText,
        setSubmitText] = useState(null);
    return (
        <div id="winsport-form" className="grid bg-light px-10 py-6">
            <h2 className="my-4 text-white text-2xl">
                <FormattedMessage id="contact.get_in_touch"/>
            </h2>
            <div className="flex">
                <div className="w-full">
                    {submitText && <p className="text-white bg-rodeoGold text-center p-1 mb-4">{submitText}</p>}
                    {submitText
                        ? null
                        : <form
                            name="winsport-contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={e => onSubmit(e, setSubmitText)}>
                            <p
                                style={{
                                display: "none"
                            }}>
                                <label>
                                    Don’t fill this out if you expect to hear back!
                                    <input name="bot-field" value="" readOnly/>
                                </label>
                            </p>
                            <input type="hidden" name="form-name" value="contact"/>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2 text-white"><FormattedMessage id="contact.name"/></label>
                                <input
                                    required={true}
                                    className="form-control bg-grey border-b-2 outline-none border-gray-50 w-full h-10 p-3 text-gray-700"
                                    type="text"
                                    name="name"/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 text-white"><FormattedMessage id="contact.email"/></label>
                                <input
                                    required={true}
                                    className="form-control bg-grey border-b-2 outline-none border-gray-50 w-full h-10 p-3 text-gray-700"
                                    type="email"
                                    name="email"/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2 text-white"><FormattedMessage id="contact.message"/></label>
                                <textarea
                                    required={true}
                                    className="form-control bg-grey border-b-2 outline-none border-gray-50 w-full h-32 p-3 text-gray-700"
                                    name="message"/>
                            </div>
                            <button
                                type="submit"
                                aria-label="button"
                                className="bg-rodeoGold text-white font-ultra mt-8 uppercase flex items-center justify-center w-64 h-12">
                                <FormattedMessage id="submit"/>
                            </button>
                        </form>}

                </div>
            </div>
        </div>
    )
}

export default injectIntl(WinsportForm)