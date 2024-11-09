import React from "react";
import Image from "next/image";
import { ContactInfoCardTypes } from "../../../Types/types";
const ContactInfoCard = ({ iconUrl, text }: ContactInfoCardTypes) => {
  return (
    <>
      <div className="contact-details-card">
        <div className="contact-icon">
          <Image src={iconUrl} alt={text} height={100} width={100} />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default ContactInfoCard;
