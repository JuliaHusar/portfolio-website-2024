import PropTypes from "prop-types";

export const ActualDescription = ({isAboutClicked, descriptionInfo}) => {
    ActualDescription.propTypes = {
        isAboutClicked: PropTypes.bool.isRequired,
        descriptionInfo: PropTypes.string.isRequired,
    };
    return (
        <div>
            {isAboutClicked && <p>{descriptionInfo}</p>}
        </div>
    );
}