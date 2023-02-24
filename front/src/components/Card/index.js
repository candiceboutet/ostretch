import React from 'react';

// Styles
import './styles.scss'

const Card = (props) => {
    

    return (
        <div className="Card">
            <a href={`/stretches/${props.link}`} className="card">
                <div>
                    <img
                        src={props.img}
                        alt={props.alt}
                        title={props.hover}
                    />
                    <div className="card-details">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                </div>
            </a>

        </div>

        // <div key={props.key} className='Card'>
        //     <a href="/stretch" className="card">
        //         <div>
        //             <h3>{props.title}</h3>
        //             <p>
        //                 {props.description}
        //             </p>
        //         </div>
        //         <img
        //             src={props.img}
        //             alt={props.alt}
        //             hover={props.hover}
        //         />
        //     </a>
        // </div>
    );
};

export default Card;