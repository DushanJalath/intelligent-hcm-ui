import React from "react";
import ContactUsForm from '../components/ContactUsForm';
import loginGif from '../assets/contactbb.gif';

export default function ContactUsPage() {
    return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${loginGif})` }}>
            <ContactUsForm title="Contact Us" />
        </div>
    );
}
