import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export default function Celebrate({ timeDone }) {
  const { width, height } = useWindowSize();
  if (timeDone) {

    return (
      <Confetti
        width={width}
        height={height}
      />
    );
  }
  return null;
}
