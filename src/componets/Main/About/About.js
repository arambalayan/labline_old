import "./aboutStyle.css"
import aboutLogo1 from '../../../Img/about-img-1-600x760.jpg'
import aboutLogo2 from '../../../Img/about-img-2.jpg'
import rev_img from '../../../Img/rev-img.png'
import { Element } from 'react-scroll'
import {useEffect} from "react";
import { useInView } from 'react-intersection-observer';

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
    },[])
    return (
        <Element className="aboutUs" name="about"  >
            <div className="container">
                <div className="aboutUs_background_lines">
                    <div className="aboutUs_line">
                    </div>
                    <div className="aboutUs_line">
                    </div>
                    <div className="aboutUs_line">
                    </div>
                    <div className="aboutUs_line">
                    </div>
                </div>
                <div className="aboutUs_block">
                    <div className="aboutUs_title">
                        <img className="leftRight_img" src={rev_img} alt='img' />
                        <p className="aboutUs_title_text">
                            О НАС
                        </p>
                        <img className="leftRight_img" src={rev_img} alt='img' />
                    </div>
                    <div className="aboutUs_subTitle2">
                        <p className="aboutUs_title2_text">
                        Наша зуботехническая лаборатория работает более 10 лет.Наши сотрудники постоянно повышают свою квалификацию у мировых известных профессионалов.С удовольствием возьмемся за решение вашей сложной задачи и реализуем в чувственную красивую улыбку.Наши техники активно поддерживают работу в команде с врачами-стоматологами.Наши принципы качество, сроки, поддержка, технологии, цены.
                        </p>
                    </div>
                </div>
                <div className="about_us_images">
                    <div className="aboutUsImg">
                        <img src={aboutLogo1} alt='img'/>
                    </div>
                    <div className="aboutUsPattern" ref={ref}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 289 543" className="about_svg">
                            <path className={inView ? 'animateion' : ''} fill="none" stroke="#9A7D57" strokeWidth="1.5" strokeMiterlimit="10"
                                d="M0 0l72.457 72.457L0 144.913l72.457 72.457L0 289.826l72.457 72.456L0 434.739l72.457 72.456-36.229 36.229M72.457 0L0 72.457l72.457 72.457L0 217.37l72.457 72.457L0 362.282l72.457 72.457L0 507.195l36.229 36.229m72.457 0l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L72.457 0m72.457 0L72.457 72.457l72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.001l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L144.914 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.002l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L217.371 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229M18.113 54.343L0 36.229m54.342-18.115L36.229 0M18.113 18.114L36.228 0M126.8 18.114L108.686 0M90.571 18.114L108.686 0m90.571 18.114L181.143 0m0 0l-18.114 18.114m108.56 0L253.475 0M235.36 18.114L253.475 0m18.24 54.343l18.113-18.114m-271.715 90.57L0 108.685m271.715 18.114l18.113-18.114M18.113 199.256L0 181.142m271.715 18.114l18.113-18.114m-271.715 90.57L0 253.598m271.715 18.114l18.113-18.114M72.457 0v36.229L90.57 54.343m-36.029 0l17.916-18.114M144.914 0v36.229l18.113 18.114m-36.029 0l17.916-18.114M217.368 0v36.229l18.114 18.114M36.229 36.229v36.229l18.113 18.114m54.344-54.343v36.229L126.8 90.571m54.343-54.342v36.229l18.114 18.114M253.6 36.229v36.229l18.113 18.114m-72.262-36.229l17.917-18.114M72.457 72.457v36.229L90.57 126.8m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 144.913v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 217.37v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 289.827v36.229L90.57 344.17m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 362.282v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 434.739v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M18.313 90.571l17.916-18.114M90.77 90.571l17.916-18.114m54.541 18.114l17.916-18.114m54.541 18.114L253.6 72.457M36.229 108.685v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4 0l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0l17.916-18.114M36.229 181.142v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4-.001l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0L253.6 217.37M36.229 253.598v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M18.113 344.159L0 326.046m271.715 18.113l18.113-18.113M18.113 416.625L0 398.512m271.715 18.113l18.113-18.113M18.113 489.081L0 470.968m271.715 18.113l18.113-18.113M36.229 326.046v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115m90.373-18.115l-17.916 18.115M36.229 398.511v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M36.229 470.968v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115M72.457 507.195v36.229m72.457-36.229v36.229m72.457-36.229v36.229">
                            </path>
                        </svg>
                    </div>
                    <div className="aboutUsImg">
                        <img src={aboutLogo2} alt='img' />
                    </div>
                </div>
            </div>
        </Element>
    )
}