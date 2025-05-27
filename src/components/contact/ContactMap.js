import React from 'react';

const ContactMap = () => {
    return (
        <>
            <section class="contact-page-google-map">
                <iframe
                    src="https://www.google.com/maps?q=Off+No.103,+1st+floor,+Hi+Tech+Premises+Co-Op.+Soc.+Ltd,+Near+SCLR+Road,+Kurla(W),+Mumbai,+Maharashtra,+India&output=embed"
                    class="contact-page-google-map__one"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

        </>
    )
}

export default ContactMap;