import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class LeadTabs extends React.Component {
    getInvitedTab (tab) {
        return tab === "new" ? (
            <span className="tab selected">Invited</span>
        ) : (
            <Link className="tab" to="/leads/new">Invited</Link>
        );
    }

    getAcceptedTab (tab) {
        return tab === "accepted" ? (
            <span className="tab selected">Accepted</span>
        ) : (
            <Link className="tab" to="/leads/accepted">Accepted</Link>
        );
    }

    render () {
        // console.log("LeadTabs this.props", this.props);
        const { tab } = this.props;
        return (
            <div className="box-wrapper">
                <div className="tab-wrapper">
                    { this.getInvitedTab(tab) }
                    { this.getAcceptedTab(tab) }
                </div>
            </div>
        );
    }
}

LeadTabs.propTypes = {
    tab: PropTypes.string
};


export default LeadTabs;
