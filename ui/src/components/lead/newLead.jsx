import React from "react";
import PropTypes from "prop-types";

class NewLead extends React.Component {
    sendAcceptLeadRequest (evt, jobId) {
        evt.preventDefault();
        this.props.acceptLeadRequest(jobId);
    }

    sendDeclineLeadRequest (evt, jobId) {
        evt.preventDefault();
        this.props.declineLeadRequest(jobId);
    }

    render () {
        // console.log("NewLead this.props", this.props);

        const {
            name,
            suburb,
            category,
            description,
            jobId,
            price
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
                </div>
                <div className="card-row">
                    <div className="job-description">{description}</div>
                </div>
                <div className="card-row">
                    <a className="accept-button" href="#" onClick={(evt) => this.sendAcceptLeadRequest(evt, jobId)}>Accept</a>
                    <a className="decline-button" href="#" onClick={(evt) => this.sendDeclineLeadRequest(evt, jobId)}>Decline</a>
                    <span className="lead-invite"><strong>${price}</strong> Lead Invitation</span>
                </div>
            </div>
        );
    }
}

NewLead.propTypes = {
    name: PropTypes.string,
    suburb: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    jobId: PropTypes.string,
    price: PropTypes.number,
    createdAt: PropTypes.string,
    acceptLeadRequest: PropTypes.func,
    declineLeadRequest: PropTypes.func
};

export default NewLead;
