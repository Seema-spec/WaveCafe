
import video from '../video/wave-cafe-video-bg.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './CafeMenu.module.scss';
import React, { useState } from 'react';
import About from './About';
import DrinkMenu from './DrinkMenu';
import Square from '../img/square.svg';

export default function CafeMenu() {
  const [title,setTitle] = useState('');

  const handleClick = (e) =>{
  console.log(e,"eeee");
  setTitle(e);
  }
  const data = [
    {
      menu:"Drink Menu",
      icon:"fas fa-mug-hot",
      submenu:[
        {
          img: "fa-regular fa-square",
          title:"Iced Coffee"
        },
        {
          img: "fa-regular fa-square",
          title:"Hot Coffee"
        },
        {
          img: "fa-regular fa-square",
          title:"Fruit Juice"
        }
      ]
    },
    {
      menu:"Special Items",
      icon:"fas fa-glass-martini tm-page-link-icon",
      submenu:[
        {
          img: "fa-regular fa-square",
          title:"Special One"
        },
        {
          img: "fa-regular fa-square",
          title:"Second Item"
        },
        {
          img: "fa-regular fa-square",
          title:"Third Item"
        }
      ]
    },
   
  ];
  const data1 = [
   
    {
      menu:"About Us",
      icon:"fas fa-users",
      submenu:[
        {
          img: "fa-regular fa-square",
          title:"About Wave Cafe"
        },
        {
          img:"fa-regular fa-square",
          title:"How we began"
        },
        {
          img:"fa-regular fa-square",
          title:"How we began"
        }
      ]
    },
  ]
  console.log(data1,"----------");
 
  return (
    <div className={styles.app}>
      <video className={styles.tm_video} autoPlay loop muted >
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles.body_content}>
        <div className={styles.leftbody_content}>
          <div className={styles.leftbody_inner_content}>
            <i className="fas fa-coffee fa-5x" style={{ color: "#4b9185" }} ></i>
            <p className={styles.tm_site_name}>Wave cafe</p>
          </div>
          
          <div className={styles.top_first_menu}>
          {data?.map((data)=>{
            return(
              <>
           <div className={styles.inner_body}>
            <div className={styles.icon_body}>
            <i className={data.icon} style= {{ color: "#4b9185", fontSize: "calc(2vw + 0.5rem)" }}></i>
            </div>
            <div className={styles.text_body}>
            <h1 className={styles.tm_menu_name} onClick={() => handleClick(data?.menu)}>{data?.menu}</h1>
          
              <div className={styles.submenu_body}>
              {data?.submenu.map((data)=>{
            return(
                  <div className={styles.submenu_icon_box}>
                  <i className={data.img} style= {{ color: "#4b9185", fontSize: "calc(0.5vw + 0.5rem)" }}></i>
                  <p className={styles.tm_submenu_name}>{data?.title}</p>
                  </div>
                  )
                })}
              </div>
           
           </div>
          </div>
          </>
          )
             })}
          </div>

          <div className={styles.top_first_menu}>
          {data1?.map((data1)=>{
            return(
              <>
           <div className={styles.inner_body}>
            <div className={styles.icon_body}>
            <i className={data1.icon} style= {{ color: "#4b9185", fontSize: "calc(1.8vw + 0.5rem)" }}></i>
            </div>
            <div className={styles.text_body}>
            <h1 className={styles.tm_menu_name} onClick={() => handleClick(data1?.menu)}>{data1?.menu}</h1>
          
              <div className={styles.submenu_body}>
              {data1?.submenu.map((data1)=>{
            return(
                  <div className={styles.submenu_icon_box}>
                  <i className={data1.img} style= {{ color: "#4b9185", fontSize: "calc(0.5vw + 0.5rem)" }}></i>
                  <p className={styles.tm_submenu_name}>{data1?.title}</p>
                  </div>
                  )
                })}
              </div>
           
           </div>
          </div>
          </>
          )
             })}
          </div>
        </div>
        <div className={styles.spacer}></div>
        {title === "Drink Menu"?<DrinkMenu/>: <About/>} 
      </div>

    </div>
  );
}

