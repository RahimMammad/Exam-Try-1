import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/${id}`);
                setProductData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <img src={productData.image} alt="" />
            <div>
                <h2>{productData.name}</h2>
                <p>{productData.category}</p>
                <span>{productData.price}</span>
            </div>
        </div>
    );
};

export default Detail;
