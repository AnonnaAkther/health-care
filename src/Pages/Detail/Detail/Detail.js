import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Detail = () => {
    const {serviceId} = useParams();
    const {user} = useAuth();
    console.log(user);
    return (
        <div className="mb-5 mt-5 text-warning">
            <h2>ID: {serviceId}</h2>
            <h2>Name: {user.displayName}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    );
};

export default Detail;