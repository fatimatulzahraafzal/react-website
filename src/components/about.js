import React from 'react';
import './about.css'; 

const About = () => {
    return (
        <section className="sectionStyle about" id="about">
            <div className="row">
                <div className="contentStyle content">
                    <p className="pStyle">
                        Kyoto House Express is the world's first sea-facing store led by Shisai Co., Ltd. and designated by Kyoto Prefecture, Japan.
                        As an external promotion platform, project sponsor Zhang Jianan is the first Chinese to hold a public office in Kyoto Prefecture (Kyoto Prefecture Overseas Development Institution).
                        Commissioner).
                        Starting from 2019, kyoto house express will be opened in Shanghai BFC Bund Financial Center, Hong Kong Taikoo Shing Apita,
                        Log On, Amaz, The Barn, Central MTR Hong Kong Station MTR Hong Kong Station and other places have landed.
                        kyoto house express is a Kyoto-themed life aesthetic space that combines academic collection space and craftsman experience
                        Established centrally, it directly cooperates with the Kyoto Prefectural Government of Japan and is responsible for promoting 136 Kyoto brands to the world.
                    </p>
                    <p className="pStyle">
                        kyoto house express是由世彩有限公司牵头，由日本京都府指定的全球第一家面向海
                        外的推广平台，项目发起人张迦南是首个担任京都府公职的华人（京都府海外开拓施
                        策特派员）。
                        2019年开始， kyoto house express分别在上海BFC外滩金融中心、香港太古城Apita、
                        Log On、Amaz、The Barn、中环港铁香港站MTR Hong Kong Station 等地方落地。
                        kyoto house express是以京都为主题的生活美学空间，将学术收藏空间和工匠体验中
                        心并设，直接协作日本京都府政府，负责136家京都品牌向世界推广。
                    </p>
                    <a href="/products" className="buttonStyle btn">Explore our Products</a>
                </div>
            </div>
        </section>
    );
}

export default About;