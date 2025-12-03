"use client";

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
  useEffect,
  useRef,
  useState,
} from "react";

interface BaseFadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
  style?: CSSProperties;
}

type FadeUpProps<T extends ElementType> = BaseFadeUpProps &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseFadeUpProps | "children"> & {
    as?: T;
  };

const FadeUp = <T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  duration = 0.6,
  offset = 0.2,
  once = true,
  style,
  ...rest
}: FadeUpProps<T>) => {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: offset },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [offset, once]);

  return (
    <Component
      ref={ref as unknown as Ref<any>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(18px)",
        transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...(rest as ComponentPropsWithoutRef<ElementType>)}
    >
      {children}
    </Component>
  );
};

export default FadeUp;
