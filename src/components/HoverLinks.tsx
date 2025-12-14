import { PropsWithChildren } from "react";
import "./styles/style.css";

type HoverLinksProps = PropsWithChildren<{
  text?: string;
  cursor?: boolean;
  className?: string;
}>;

const HoverLinks = ({ text, cursor, className, children }: HoverLinksProps) => {
  // If children are passed, render them (wrapper mode).
  // Otherwise render the text (legacy mode).
  if (children) {
    return (
      <span className={className ? `hover-link ${className}` : "hover-link"}>
        {children}
      </span>
    );
  }

  return (
    <span
      className={className ? `hover-link ${className}` : "hover-link"}
      data-cursor={cursor ? "true" : "false"}
    >
      {text}
    </span>
  );
};

export default HoverLinks;
