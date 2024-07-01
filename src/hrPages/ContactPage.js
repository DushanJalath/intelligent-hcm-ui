import React from "react";
import ContactUsTable from '../components/ContactUsTable';
import HRSidebar from "../components/HRSidebar";

export default function ContactPage() {
    return (
        <div>
            <HRSidebar/>
            <ContactUsTable title="Feedback Details" />
        </div>
    );
}
