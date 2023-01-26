import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'mac book pro', price: 145000 },
        { id: 2, name: 'mac book crow', price: 135000 },
        { id: 3, name: 'mac book grow', price: 165000 }
    ]
    return (
        <div className="card-group">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default CardGroup;