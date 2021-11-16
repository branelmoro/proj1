import NewLeads from '../components/lead/newLeads';
import AcceptedLeads from '../components/lead/acceptedLeads';

const routes = [
    {
        path: '/',
        exact: true,
        component: NewLeads
    },
    {
        path: '/leads/new',
        exact: true,
        component: NewLeads
    },
    {
        path: '/leads/accepted',
        exact: true,
        component: AcceptedLeads
    }
];

export default routes;
