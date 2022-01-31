import React from 'react';

import SpecialDoctor1 from '../../images/doctor/doctor1.png.webp';
import SpecialDoctor2 from '../../images/doctor/doctor2.png.webp';
import SpecialDoctor3 from '../../images/doctor/doctor3.png.webp';
import SpecialDoctor4 from '../../images/doctor/doctor4.png.webp'
import SpecialDoctor5 from '../../images/doctor/doctor5.png.webp'
import SpecialDoctor6 from '../../images/doctor/doctor6.png.webp'
import SpecialDoctor from '../SpecialDoctor/SpecialDoctor';

const doctors = [
    {
        img: SpecialDoctor1,
        name: 'Dr.Anisul Islam and Dr.Shammima Akther',
        Specialized: 'Ortho-Surgery'
    },
    {
        img: SpecialDoctor2,
        name: 'Dr.Habib Ahmed, Dr.Kristimas, Dr.Moni Roy, Dr.Oishi, Dr.Jesmin',
        Specialized: 'D-Ortho'
    },
    {
        img: SpecialDoctor3,
        name: 'Dr.Moni Roy',
        Specialized: 'Spine-Surgeon'
    },
    {
        img: SpecialDoctor4,
        name: 'Dr.Jesmin',
        Specialized: 'Non-Surgical Pain Management'
    },
    {
        img: SpecialDoctor5,
        name: 'Dr.Onita Roy ',
        Specialized: 'Neuro-Surgery'
    },
    {
        img: SpecialDoctor6,
        name: 'Dr.Anamul Islam',
        Specialized: 'Health Care'
    },
]

const SpecialDoctors = () => {
    return (
        <div id="doctors">
            <h2 className="text-warning">Our Special Doctors</h2>
            <div>
                {
                    doctors.map(doctor => <SpecialDoctor
                    key={doctor.name}
                    doctor={doctor}
                    ></SpecialDoctor>)
                }
            </div>
        </div>
    );
};

export default SpecialDoctors;