import './custom.css';

const CustomStatusBadge = ({ status }) => {
    switch (status.toLowerCase()) {
        case 'active':
            return <div className='customStatusBadge active'>{status}</div>
        case 'under revamp':
            return <div className='customStatusBadge inactive'>{status}</div>
        default:
            return <div className='customStatusBadge'>{status}</div>
    }
}

export default CustomStatusBadge;