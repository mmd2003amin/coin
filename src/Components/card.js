import React from 'react';

const Card = ({image , about , header}) => {
    return (
        <div className="max-w-fit mx-auto 1120:m-4 rounded-3xl h-fit p-5 bg-gray-100 mb-7 border border-solid
        border-gray-300 hover:scale-110 duration-500 ">
            <img src={image} alt="image" className="mx-auto w-44 mt-6" />
            <h1 className="text-center font-black text-lg mt-8">{header}</h1>
            <p className="mx-auto mt-5 text-gray-400 font-vazirRegular text-sm text-center mb-6 max-w-[97%]">{about}</p>
        </div>
    );
};

export default Card;