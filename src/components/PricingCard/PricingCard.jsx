import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {title, price, description, features} = pricing;

    return (
        <div className='flex flex-col border bg-amber-600 rounded-2xl p-4'>
            {/* card header */}
            <div >
                <h1 className='text-7xl'>{title}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-gradient-to-r from-amber-500 via-orange-300 to-yellow-400 rounded-2xl mt-10 p-4 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature
                    key={index} 
                    feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4 text-white border-none bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 rounded-2xl hover:opacity-50">Subscribe</button>
        </div>
    );
};

export default PricingCard;