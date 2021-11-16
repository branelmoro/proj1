import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LeadTabs from "./leadTabs";
import NewLead from "./newLead";
import {
    fetchNewLeadsRequest,
    acceptLeadRequest,
    declineLeadRequest
} from "../../reduxActions/leadActions";

class NewLeads extends React.Component {
    componentDidMount () {
        this.props.fetchNewLeadsRequest();
    }

    render () {
        // console.log("NewLeads this.props", this.props);
        return (
            <div className="lead-container">
                <LeadTabs tab="new" />
                <div className="card-list">
                    { this.props.newLeads.length === 0 && "No Leads found!!" }
                    { this.props.newLeads.length > 0 && this.props.newLeads.map(p => (
                        <NewLead acceptLeadRequest={this.props.acceptLeadRequest}
                            declineLeadRequest={this.props.declineLeadRequest}
                            {...p}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

NewLeads.propTypes = {
    newLeads: PropTypes.array,
    fetchNewLeadsRequest: PropTypes.func,
    acceptLeadRequest: PropTypes.func,
    declineLeadRequest: PropTypes.func
};

const mapStateToProps = state => {
    return {
        newLeads: state.lead.newLeads
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewLeadsRequest: () => dispatch(fetchNewLeadsRequest()),
        acceptLeadRequest: (jobId) => dispatch(acceptLeadRequest(jobId)),
        declineLeadRequest: (jobId) => dispatch(declineLeadRequest(jobId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewLeads);
