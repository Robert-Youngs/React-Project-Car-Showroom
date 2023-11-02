import React from 'react'
import styles from './Search.module.css'
import card from './Cards.jsx'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../search/Cards';

const Search = () => {
  return (
    <div className={styles.find}>
        <div className={styles.head}>
            <h1>Find Your Drive</h1>
            <div className={styles.text_bg}>
                <p>
                    <span>Expolre the world's largest car sharing marketplace</span>
                </p>
            </div>
        </div>
        <div className={styles.slider_container}>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            breakpoints={{
                //When Window Width is >= 340px
                340:    {
                    width: 200,
                    slidesPerView: 1,
                },
                //When Window Width is >= 768px
                768:    {
                    width: 768,
                    slidesPerView: 4,
                },
                //When Window Width is >= 1040px
                1040:    {
                    width: 1040,
                    slidesPerView: 5,
                },
              }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >   
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1616646187794-d3007d1923a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' make='Car' />
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1582160309675-8c2570e15087?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' make='Car' />
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1616520105012-74f54ed488fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80' make='Car' />
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1520587210458-bd3bee813b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' make='Car' />
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1536048284960-eb628c365abb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' make='Car' />
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1691145123297-2d67c7f11e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80' make='Car' />
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1691145088095-3cea7a782ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' make='Car' />
                </SwiperSlide>
            </Swiper>

        </div>
        
    </div>
  )
}

export default Search