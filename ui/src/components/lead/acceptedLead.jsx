import React from "react";
import PropTypes from "prop-types";

class AcceptedLead extends React.Component {
    render () {
        // console.log("AcceptedLead this.props", this.props);

        const {
            name,
            suburb,
            category,
            description,
            jobId,
            price,
            phoneNumber,
            emailAddress
        } = this.props;

        let iconChar = "";
        let iconCharClass = `tradie-icon trdBG0`;
        if (name.length) {
            iconChar = name[0].toUpperCase();
            iconCharClass = `tradie-icon trdBG${iconChar.charCodeAt(0) % 5}`;
        }

        const d = new Date(this.props.createdAt);

        const time = `${d.toLocaleString("en-AU", { month: "long" })} ${d.getDate()} ${d.getFullYear()} @ ${d.toLocaleTimeString("en-AU", { timeStyle: "short" })}`;

        return (
            <div className="box-wrapper card">
                <div className="card-row">
                    <div className={iconCharClass}>{iconChar}</div>
                    <div className="tradie-info">
                        <div className="tradie-name">{name}</div>
                        <div className="card-time">{time}</div>
                    </div>
                </div>
                <div className="card-row job-row">
                    <span className="job-location">{suburb}</span>
                    <span className="job-category">{category}</span>
                    <span className="job-id">Job Id: {jobId}</span>
                    <span className="lead-invite">${price} Lead Invitation</span>
                </div>
                <div className="card-row">
                    <div className="contact-details">
                        <span className="mobile-number">{phoneNumber}</span>
                        <span className="email-address">{emailAddress}</span>
                    </div>
                    <div className="job-description">{description}</div>
                </div>
            </div>
        );
    }
}

AcceptedLead.propTypes = {
    name: PropTypes.string,
    suburb: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    jobId: PropTypes.string,
    price: PropTypes.number,
    phoneNumber: PropTypes.string,
    emailAddress: PropTypes.string,
    createdAt: PropTypes.string
};

export default AcceptedLead;
