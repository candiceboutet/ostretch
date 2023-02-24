import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import './styles.scss'

const Card = (props) => {
    

    return (
        <div className="Card">
            <Link to={`/stretches/${props.link}`} className="card">
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
            </Link>

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