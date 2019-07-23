import React from "react"
import { useSpring, animated } from "react-spring"

export default function AnimatedContent(props) {
  const animatedProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 100,
  })
  return <animated.div style={animatedProps} {...props} />
}
