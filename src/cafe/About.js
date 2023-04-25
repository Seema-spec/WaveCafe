
import video from '../video/wave-cafe-video-bg.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './About.module.scss';
import React from 'react';
import aboutImg from '../img/about-1.png'
import aboutImg2 from '../img/about-2.png'

export default function About() {
  return (
    <div className={styles.right_body_container}>
    <div className={styles.rightbody_content}>
      <div className={styles.body_content}>
        <div className={styles.t_heading}>About Wave Cafe</div>
        <div className={styles.inner_content}>
            <img className={styles.inner_img} src={aboutImg} alt=''/>
            <p className={styles.inner_text}>
            Wave Cafe is a one-page video background HTML CSS template from Tooplate. You can use this for your business websites.<br/><br/>
            Maximus neque, et commodo nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus in venenatis venenatis et.
            </p>
        </div>
      </div>
    </div>
    <div className={styles.rightbody_content}>
    <div className={styles.body_content}>
      <div className={styles.tt_heading}>How we began</div>
      <div className={styles.inner_content2}>
        <div className={styles.inner_content_text}>
        <p className={styles.inner_text2}>
          Arcu vestibulum molestie convallis risus. Sed et dui elementum, scelerisque augue quis, hendrerit elit varius.</p>
          <img className={styles.inner_img2} src={aboutImg2} alt=''/>
        </div>
            <p className={styles.inner_text2}>Donec non urna elit. Quisque ut magna in dui mattis iaculis eu finibus metus. Suspendisse vel mi a lacus finibus vehicula vel ut diam. Nam pellentesque, mi quis ullamcorper.
          </p>
      </div>
    </div>
  </div>
  </div>
  );
}

