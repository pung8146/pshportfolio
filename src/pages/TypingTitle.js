import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 8rem;
  margin: 0 auto;
`;

function TypingTitle({ children }) {
    const [content, setContent] = useState("");
    const fullContent = children;
  
    const titleRef = useRef();
    const intervalRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let i = 0;
            intervalRef.current = setInterval(() => {
              if (i < fullContent.length) {
                setContent((content) => content + fullContent[i]);
                i++;
              } else {
                clearInterval(intervalRef.current);
              }
            }, 300);
          } else {
            clearInterval(intervalRef.current);
            setContent("");
          }
        },
        { threshold: 1 }
      );
  
      observer.observe(titleRef.current);
  
      return () => {
        observer.unobserve(titleRef.current);
        clearInterval(intervalRef.current);
        setContent("");
      };
    }, [fullContent]);
  
    return <Title ref={titleRef}>{content}</Title>;
}

export default TypingTitle;
