import React from 'react'
import Title from './Title';
import { serivces } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
        <Title firstword='our' secondword='services' />
    
    <div className="section-center services-center">
        {serivces.map((link)=>{
            const {icon,title,text}=link;
            return(
                <article className="service">
            <span className="service-icon"><i className={icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">
                {text}
              </p>
            </div>
          </article>
            );
        })}

      
    </div>
  </section>
  )
}

export default Services