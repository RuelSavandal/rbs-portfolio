import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2019 - 2020'} 
                        title={'Service Engineer / Technical Support'}
                        subTitle={'UNISON Computer System Inc.'}
                        text={'Apply diagnostic techniques to identify problems, investigates causes and recommend solutions to common failure. Respond to ticket promptly, apply patch/fixes, monitor timely resolution of issues, and ensure that the open tickets are resolved within agreed SLA. Escalate complex problems to higher level of expertise.'} 
                    />
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'Field Service Enginer'}
                        subTitle={'IDEASERV System Inc.'}
                        text={'Providing hands-on IT and technical support to company client stores by: Respond to ticket promptly, apply patch/fixes, monitor timely resolution of issues, and ensure that the open tickets are resolved within agreed SLA, Conducting quarterly of preventive maintenance, Repairing and troubleshooting of POS machines.'} 
                    />
                    <ResumeItem 
                        year={'2016'} 
                        title={'Sales & Computer Technician (OJT) '}
                        subTitle={'GRPC Access Computer Trading & MPC Computer Village'}
                        text={'Apply technical services for costumer concerns, Perform sales for Computer system, Software and Hardware installation and configuration, to ensure the quality of the product sale for the best costumers feedback, Monthly sending Report for the target sales and Ensure that the stocks inventory is up to date.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'BS in Information Technology'}
                        subTitle={'St. John Bosco IAS'}
                        text={'#55 Shaw Blvd. Kalentong 1550, Mandaluyong, Philippines'} 
                    />
                    <ResumeItem 
                        year={'2014 - 2016'} 
                        title={'Computer Hardware Servicing NCII'}
                        subTitle={'St. John Bosco IAS'}
                        text={'#55 Shaw Blvd. Kalentong 1550, Mandaluyong, Philippines'} 
                    />
                    <ResumeItem 
                        year={'2010 - 2014'} 
                        title={'High School Graduate'}
                        subTitle={'Andres Bonifacio Integrated School'}
                        text={'Block 35 Barangay Addition Hills Mandaluyong City 1550'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume