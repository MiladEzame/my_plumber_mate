import React from 'react'
import Icon1 from '../../images/svg-1.svg'
// import Icon1 from '../../images/svg-2.svg'
// import Icon1 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Repair</ServicesH2>
            <ServicesP>We help fix, repair and install your desired equipments.</ServicesP>
          </ServicesCard>
          {/* <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Fix</ServicesH2>
            <ServicesP>We help fix, repair and install your desired equipments.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Install</ServicesH2>
            <ServicesP>We help fix, repair and install your desired equipments.</ServicesP>
          </ServicesCard> */}
        </ServicesWrapper>
      </ServicesContainer>
  )
}

export default Services
