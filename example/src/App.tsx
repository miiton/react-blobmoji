import * as React from 'react';

import {
  MeltingFace,
  SalutingFace,
  DottedLineFace,
  SmilingFaceWithSunglasses,
  ThinkingFace,
  FaceWithDiagonalMouth,
  ZanyFace,
  FaceWithOpenEyesAndHandOverMouth,
  FaceExhaling,
  PleadingFace,
} from 'react-blobmoji';

const App = () => {
  const faces = [
    <MeltingFace size="100%" />,
    <SalutingFace size="100%" />,
    <DottedLineFace size="100%" />,
    <SmilingFaceWithSunglasses size="100%" />,
    <ThinkingFace size="100%" />,
    <FaceWithDiagonalMouth size="100%" />,
    <ZanyFace size="100%" />,
    <FaceWithOpenEyesAndHandOverMouth size="100%" />,
    <FaceExhaling size="100%" />,
    <PleadingFace size="100%" />,
  ];
  const size = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '64rem',
        margin: '0 auto',
      }}
    >
      {[...Array(128)].map((a: any, b: any) => {
        const r = Math.round(Math.random() * 10);
        const s = size(24, 128);
        return (
          <div style={{ width: s, height: s }} key={b}>
            {faces[r]}
          </div>
        );
      })}
    </div>
  );
};

export default App;
