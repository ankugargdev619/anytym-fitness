import { InstagramIcon } from "@/icons/instagram"
import { NamedLogo } from "@/icons/logo"
import { XIcon } from "@/icons/x"
import { FooterSection } from "./footer-section"

export const Footer = () => {
    return <div className="my-20 md:max-h-[1000px] w-full border-t-2 border-brand-600">
        <div className="flex-wrap h-48 md:mx-20 my-10 flex z-10 gap-10 md:gap-16 justify-center items-start ">
            <div className="h-full flex-col flex justify-center items-start md:items-center ">
                <NamedLogo size="60" width="100" height="100" />
                <div className="flex flex-row mt-10 gap-10 md:mt-0">
                    <InstagramIcon size="50" />
                    <XIcon size="40" />
                </div>
            </div>
            <FooterSection title="Address">
                5911 Anytym Fitness Gym
                <br />
                Jaurbar, Near Daulatpur Rd Chowk
                <br />
                Himachal Pradesh, 177109
            </FooterSection>
            <FooterSection title="Contact Us">
                Email : anytymfitness@gmail.com
                <br />
                Phone : +91 9876543210
            </FooterSection>
            <FooterSection title="Important Links">
                Home
                <br />
                About Us
                <br />
                Blogs
                <br />
                FAQs
                <br />
                Privacy Policy
                <br />
                Terms and Conditions
                <br />
                Disclaimer
            </FooterSection>
        </div>
    </div>
}