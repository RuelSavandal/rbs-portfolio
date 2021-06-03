import Particles from 'react-particles-js';

import React from 'react';

function Particle() {
  return (
    <>
      <Particles
    params={{
	    particles: {
	        number: {
	            value: 50
	        },
	        size: {
	            value: 3
	        }
	    },
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: "repulse"
	            }
	        }
	    }
	}} />
    </>
  )
}

export default Particle;