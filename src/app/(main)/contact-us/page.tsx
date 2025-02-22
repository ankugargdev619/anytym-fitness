import { ContactForm } from "@/components/contact-form";
import { Map } from "@/components/map";
import { PageHeading } from "@/components/page-heading";

const API_KEY = "";

export default function AboutUs() {
  return (
    <div >
      <PageHeading title="Contact Us" />
      <div className="px-10 md:px-20 py-10 text-xl">
        <div className="flex gap-10 flex-wrap">
          <ContactForm />
          <Map />
        </div>
      </div>
    </div>
  );
}