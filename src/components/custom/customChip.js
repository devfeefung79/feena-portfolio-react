import './custom.css';

const CustomChip = ({ text, isPrimary }) => {
    return (
        <div className={`customChip ${isPrimary ? "primary" : ""}`}>{text}</div>
    );
}

export default CustomChip;