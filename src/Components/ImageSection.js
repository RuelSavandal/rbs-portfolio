import React from 'react'
import styled from 'styled-components';
import resume from '../img/avatar.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Ruel B. Savandal</span></h4>
                <p className="paragraph">
                To work in a position where I can effectively apply the knowledge and skills that I have learned,
                maximize my potentials, and therefore provide quality service to the company or organization I am to be part of.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Ruel B. Savandal</p>
                        <p>: 23 </p>
                        <p>: Filipino </p>
                        <p>: Tagalog, English, Nihonggo </p>
                        <p>: Mandaluyong, Philippines</p>
                        <p>: Freelance </p>
                    </div>
                </div>
                <div>
                <a href="https://drive.google.com/file/d/1Hb0qLZieu5D1AnaHjekFXPjAmfW7e1bt/view?usp=sharing" download="Resume_Savandal.docx">
                    <PrimaryButton title={'Download Cv'} />
                </a>
                </div>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;