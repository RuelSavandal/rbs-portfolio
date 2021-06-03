import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'MATERIAL-UI'}
                            width={'75%'}
                            text={'75%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;