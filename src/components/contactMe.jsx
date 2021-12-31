import React from "react";
import * as data from '../data/contactMe.json';

let contactData = data;
const ContactMe = () => {
    return(
        <div id="contactMe">
                <div className="text-center">
                    <div className="contactContainer">
                        <div>
                            {contactData.email}
                        </div>
                        <div>
                            {contactData.LinkedIn}
                        </div>
                        <div>
                            {contactData.Medium}
                        </div>
                        <div>
                            {contactData.resume}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ContactMe;