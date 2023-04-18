import React from 'react';
import "./TestimonialCard.scss";

const TestimonialCard = ({ testimonial }) => (
    <div className="testimonialcard_main">
        <div className="testimonialcard_parent">

            <p className="testimonial_text">
                {testimonial.description}
            </p>

            <div className="testimonial_imagediv">
                <a href={testimonial.linkedin}>
                    <img src={testimonial.picture} alt="" />
                </a>

                <a href={testimonial.linkedin} target='blank' rel='noreferrer' >
                    <div className='textdiv'>
                        <p>{testimonial.name}</p>
                        <p>{testimonial.postition}</p>
                    </div>
                </a>
            </div>

        </div>
    </div>
);

export default TestimonialCard;
