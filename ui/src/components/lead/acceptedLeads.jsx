import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LeadTabs from "./leadTabs";
import AcceptedLead from "./acceptedLead";
import { fetchAcceptedLeadsRequest } from "../../reduxActions/leadActions";

class AcceptedLeads extends React.Component {
    componentDidMount () {
        this.props.fetchAcceptedLeadsRequest();
    }

    render () {
        // console.log("AcceptedLeads this.props", this.props);
        return (
            <div className="lead-container">
                <LeadTabs tab="accepted" />
                <div className="card-list">
                    { this.props.acceptedLeads.length === 0 && "No Leads found!!" }
                    { this.props.acceptedLeads.length > 0 && this.props.acceptedLeads.map(p => (
                        <AcceptedLead {...p} />
                    ))}
                </div>
            </div>
        );
    }
}

AcceptedLeads.propTypes = {
    acceptedLeads: PropTypes.array,
    fetchAcceptedLeadsRequest: PropTypes.func
};

const mapStateToProps = state => {
    return {
        acceptedLeads: state.lead.acceptedLeads
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAcceptedLeadsRequest: () => dispatch(fetchAcceptedLeadsRequest())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AcceptedLeads);
