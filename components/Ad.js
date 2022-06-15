import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Flowerbed from "./Flowerbed";

const Ad = ({ props }) => {
  const [close, setClose] = useState(false);

  return (
    <div className="absolute w-[120px] h-[40px] 4xs:w-[198px] 4xs:h-[70px] 3xs:w-[300px] 3xs:h-[110px] 2xs:w-[370px] 2xs:h-[130px] xs:w-[438px] xs:h-[146px] sm:w-[480px] sm:h-[160px] md:w-[600px] md:h-[200px] lg:w-[630px] lg:h-[210px] xl:w-[750px] xl:h-[250px] bottom-5 left-1/2 transform -translate-x-1/2 ">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 15 }}>
        <ambientLight intensity={0.7} />
        <pointLight intensity={0.7} position={[8, 7, 5]} />

        <Suspense fallback={null}>
          <Flowerbed
            close={close}
            setClose={setClose}
            position={[0, -0.4, 0]}
            scale={[0.58, 0.58, 0.58]}
            rotation={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Ad;
