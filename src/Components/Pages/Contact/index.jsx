import { Helmet } from "react-helmet-async"
import { ContactForm } from "../../ContactForm"

export function Contact() {
    return (
        <>
        <Helmet>
            <title>Contact us</title>
            <meta name="description" content="Send us a message with your enquiry" />
        </Helmet>
        <div>
            <h1>Contact us</h1>
            <ContactForm></ContactForm>
        </div>
        </>
    )
}