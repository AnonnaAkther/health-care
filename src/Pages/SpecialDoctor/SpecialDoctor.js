import React from 'react';

const SpecialDoctor = ({doctor}) => {
    const {name, img, Specialized} = doctor;
    return (
        <div>
            <img src={img} alt="" />
            <ul>
                <li>{name}</li>
            </ul>
            <h4>{Specialized}</h4>
        </div>
    );
};

export default SpecialDoctor;