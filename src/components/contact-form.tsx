import { Button } from "./button"
import { FormCell } from "./form-cell"

export const ContactForm = () => {
    return <div className="w-full h-full">
        <div className="my-6">Contact Us</div>
        <div className="p-10 rounded-lg border-brand-600 border-[1px]">
            <FormCell label="Full Name" type="text" placeholder="Enter your name" isMandatory={true}/>
            <div className="flex flex-col md:flex-row md:gap-4">
                <FormCell label="Email" type="email" placeholder="Enter your email" isMandatory={true}/>
                <FormCell label="Phone" type="tel"  placeholder="Enter your phone number" isMandatory={true}/>
            </div>
            <FormCell label="Message" type="message" placeholder="Your message here..." />

            <Button label="Submit" variant="primary"/>
        </div>
    </div>
}