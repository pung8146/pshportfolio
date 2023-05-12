import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import VanillaTilt from 'vanilla-tilt';

const TiltContainer = styled.div`
  width: 300px;
  height: 300px;
  background: url('./img/dog.png');
  background-size: cover;
  border-radius: 50px;
  position: relative;
`;

const Card = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;

    if (tiltNode) {
      VanillaTilt.init(tiltNode, { glare: true, 'max-glare': 0.2 });
    }

    return () => {
      if (tiltNode) {
        tiltNode.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div>
      <TiltContainer ref={tiltRef} />
    </div>
  );
};

export default Card;
