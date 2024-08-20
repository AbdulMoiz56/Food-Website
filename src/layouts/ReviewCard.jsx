import React from "react";

const ReviewCard = (props) => {
    return(
        <div className="w-full md:w-1/3 border-2 bg-white border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px,_3px,_8px]">
            <div>
                <p className="text-lightText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi unde voluptatum laborum numquam modi eius recusandae perferendis maxime, ipsum est quos fuga odio. Vero excepturi illo unde cumque aperiam.</p>
            </div>
            <div className="flex flex-row justify-center items-center mt-4 gap-4">
                <img src={props.img} alt="img" loading='lazy' className="rounded-full w-1/4"/>
                <h3 className="font-semibold">{props.name}</h3>
            </div>
        </div>
    )
}

export default ReviewCard