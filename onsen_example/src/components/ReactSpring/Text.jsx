import React,{useState} from 'react'
import { useSpring, animated, config } from 'react-spring'

export default function Text() {
    const [flip, set] = useState(false);
    const props = useSpring({
      to: { opacity: 1 , color: 'red'},
      from: { opacity: 0.7 , color: 'blue'},
      reset: true,
      reverse: flip,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!flip),
    });
  
    return <animated.h1 style={props}>Text Example</animated.h1>;
}
