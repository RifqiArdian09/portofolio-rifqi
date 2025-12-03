"use client";

import { useEffect, useMemo, useState } from "react";

interface TypewriterTextProps {
  text?: string;
  phrases?: string[];
  speed?: number;
  deleteSpeed?: number;
  holdDuration?: number;
  startDelay?: number;
  className?: string;
  caretClassName?: string;
}

export default function TypewriterText({
  text,
  phrases,
  speed = 70,
  deleteSpeed = 40,
  holdDuration = 1500,
  startDelay = 400,
  className,
  caretClassName = "text-sky-300",
}: TypewriterTextProps) {
  const phraseList = useMemo(() => {
    if (phrases?.length) {
      return phrases;
    }

    if (text) {
      return [text];
    }

    return [];
  }, [phrases, text]);

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const shouldCycle = phraseList.length > 1;

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsDeleting(false);
    setHasStarted(false);
  }, [phraseList]);

  useEffect(() => {
    if (!phraseList.length) {
      return undefined;
    }

    const timer = setTimeout(() => setHasStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [phraseList, startDelay]);

  useEffect(() => {
    if (!hasStarted || !phraseList.length) {
      return undefined;
    }

    const fullText = phraseList[currentIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting && displayedText === fullText) {
      if (!shouldCycle) {
        return undefined;
      }

      timeout = setTimeout(() => setIsDeleting(true), holdDuration);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phraseList.length);
      }, 280);
    } else {
      const nextText = isDeleting
        ? fullText.slice(0, Math.max(0, displayedText.length - 1))
        : fullText.slice(0, displayedText.length + 1);

      timeout = setTimeout(
        () => setDisplayedText(nextText),
        isDeleting ? deleteSpeed : speed,
      );
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [
    currentIndex,
    deleteSpeed,
    displayedText,
    hasStarted,
    holdDuration,
    isDeleting,
    phraseList,
    shouldCycle,
    speed,
  ]);

  if (!phraseList.length) {
    return null;
  }

  return (
    <span className={className} aria-label={phraseList[currentIndex]}>
      {displayedText}
      <span className={`${caretClassName} ml-1 inline-block animate-pulse`}>
        |
      </span>
    </span>
  );
}
