import { FC, HTMLAttributes, ReactNode, useRef } from "react";
import { Transition } from "react-transition-group";

const transitionStyles = {
  entering: {
    maxWidth: "28rem",
    width: "24rem",
    transform: "translateX(28rem)",
  },
  entered: { maxWidth: "28rem", width: "24rem", transform: "translateX(0rem)" },
  exiting: {
    maxWidth: "28rem",
    width: "24rem",
    transform: "translateX(28rem)",
  },
  exited: { maxWidth: "28rem", width: "24rem", transform: "translateX(28rem)" },
} as { [x: string]: any };

interface RightSlideInProps extends HTMLAttributes<HTMLDivElement> {
  in?: boolean;
  duration?: number;
  delay?: string;
  children?: ReactNode;
}

export const RightSlideIn: FC<RightSlideInProps> = ({
  in: asIn,
  duration = 100,
  children,
  className,
  style,
}) => {
  const transitionRef = useRef(null);
  return (
    <Transition in={asIn} timeout={duration} nodeRef={transitionRef}>
      {(state) => (
        <div
          ref={transitionRef}
          className={className}
          style={{
            transition: ".4s ease-out",
            ...style,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
