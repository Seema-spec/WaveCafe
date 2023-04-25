
import video from '../video/wave-cafe-video-bg.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './DrinkMenu.module.scss';
import React, { useEffect, useState } from 'react';
import HotAmericano from '../img/hot-americano.png'
import HotCappuccino from '../img/hot-cappuccino.png'
import HotEspresso from '../img/hot-espresso.png'
import HotLatte from '../img/hot-latte.png'

import Strawberry from '../img/smoothie-1.png'
import RedBerry  from '../img/smoothie-2.png'
import Pineapple from '../img/smoothie-3.png'
import Spinach from '../img/smoothie-4.png'

import IcedAmericano from '../img/iced-americano.png'
import IcedCappuccino  from '../img/iced-cappuccino.png'
import IcedEspresso from '../img/iced-espresso.png'
import IcedLatte from '../img/iced-latte.png'

export default function DrinkMenu() {
    const [data, setData] = useState([]);

    const hotCoffee = [
        {
            img: HotAmericano,
            title: "Hot Americano",
            price: "$8.50",
            text: "Here is a short description for the item along with a squared thumbnail."
        },
        {
            img: HotCappuccino,
            title: "Hot Cappuccino",
            price: "$9.50",
            text: "Here is a list of 4 items that can add more as you need. Only content area will be scrolling."
        },
        {
            img: HotEspresso,
            title: "Hot Espresso",
            price: "$7.50",
            text: "Left side logo and main menu are fixed. The video background is fixed."
        },
        {
            img: HotLatte,
            title: "Hot Latte",
            price: "$7.50",
            text: "Page contents are organized into 3 tabs to show different lists of items."
        }
    ]
    const icedCoffee = [
        {
            img: IcedAmericano,
            title: "Iced Americano",
            price: "$8.50",
            text: "Here is a short description for the item along with a squared thumbnail."
        },
        {
            img: IcedCappuccino,
            title: "Iced Cappuccino",
            price: "$9.50",
            text: "Here is a list of 4 items that can add more as you need. Only content area will be scrolling."
        },
        {
            img: IcedEspresso,
            title: "Iced Espresso",
            price: "$7.50",
            text: "Left side logo and main menu are fixed. The video background is fixed."
        },
        {
            img: IcedLatte,
            title: "Iced Latte",
            price: "$7.50",
            text: "Page contents are organized into 3 tabs to show different lists of items."
        }
    ]
    const fruitJuice = [
        {
            img: Strawberry,
            title: "Strawberry Smoothie",
            price: "$12.50",
            text: "Here is a short description for the item along with a squared thumbnail."
        },
        {
            img: RedBerry,
            title: "Red Berry Smoothie",
            price: "$14.50",
            text: "Here is a list of 4 items that can add more as you need. Only content area will be scrolling."
        },
        {
            img: Pineapple,
            title: "Pineapple Smoothie",
            price: "$16.50",
            text: "Left side logo and main menu are fixed. The video background is fixed."
        },
        {
            img: Spinach,
            title: "Spinach Smoothie",
            price: "$18.50",
            text: "Page contents are organized into 3 tabs to show different lists of items."
        }
    ]
    const handleClick = (data) => {
        if (data === "HotCoffee") {
            setData(hotCoffee)
        } else if(data === "FruitJuice"){
            setData(fruitJuice)
        } else{
            setData(icedCoffee)
        }
    }
     
    useEffect(() => {
       setData(icedCoffee);
      }, []);
      
    console.log(data, "----");
    return (
        <div className={styles.right_body_container}>
            <div className={styles.rightbody_content}>
                <div className={styles.body_content}>
                    <div className={styles.t_heading} onClick={() => handleClick("IcedCoffee")}>Iced Coffee</div>
                    <div className={styles.t_heading} onClick={() => handleClick("HotCoffee")}>Hot Coffee</div>
                    <div className={styles.t_heading} onClick={() => handleClick("FruitJuice")}>Fruit Juice</div>
                </div>
                {data?.map((data) => {
                    return (
                        <div className={styles.inner_content}>
                            <img className={styles.inner_img} src={data.img} alt='' />
                            <div className={styles.inner_box}>
                                <div className={styles.inner_heading}>
                                    <h4>{data.title}</h4>
                                    <h4 style={{ color: "#7fe2d2" }}>{data.price}</h4>
                                </div>
                                <p>{data.text}</p>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    );
}

