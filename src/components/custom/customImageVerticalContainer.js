import './custom.css';

const customImageVerticalContainer = ({ imageSrc, altText }) => {
    return (
        <div className="customImageVerticalContainer">
            <img src={imageSrc} alt={altText}/>
        </div>
    );
}

export default customImageVerticalContainer;