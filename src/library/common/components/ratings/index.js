import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import "./ratings.scss";

const ratings = ({type, actualRating, onChange}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        setRating(actualRating);
    }, []);

    const updateRating = (index) => {
        setRating(index);
        onChange(type, index);
    }

    return (
        <div className="rating">
            {[...Array(5)].map((star, index) => {
                index += 1;

                return (
                    <button
                        type="button"
                        key={index}
                        className={`star-button ${star}-rate ${index <= (hover || rating)? "on" : "off"}`}
                        onClick={() => updateRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                )
            })}
        </div>
    );
};

ratings.propTypes = {
    type: PropTypes.string.isRequired,
    actualRating: PropTypes.number,
    onChange: PropTypes.func,
}
ratings.defaultProps = {
    actualRating: 0,
    onChange: () => {}
}