import React from "react";
import DishesCard from "../layouts/dishesCard";
import img1 from '../assets/img/menu1.jpg'
import img2 from '../assets/img/menu2.jpg'
import img3 from '../assets/img/menu3.jpg'



const Menu = () => {
    return(
        <div className="min-h-screeen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
                Premium Menu
            </h1>

            <div className="flex flex-wrap gap-8 justify-center">
                <DishesCard img={img1} title='Delicious Dishes' price='$16.99'/>
                <DishesCard img={img2} title='Delicious Dishes' price='$18.99'/>
                <DishesCard img={img3} title='Delicious Dishes' price='$14.99'/>

            </div>
        </div>
    )
}

export default Menu