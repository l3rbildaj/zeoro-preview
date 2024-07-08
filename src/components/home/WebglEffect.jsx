import { useTexture } from '@react-three/drei';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '@whatisjery/react-fluid-distortion';

export default function WebglEffect() {

    const texture = useTexture('/img1.png');


    return (

        <EffectComposer>
            <Fluid showBackground={false} distortion={1} rainbow intensity={5} />
            {/* <mesh position={[-2, 1, 0]}>
                <planeGeometry attach="geometry" args={[11, 8]} />
                <meshBasicMaterial attach="material" map={texture} transparent={true} />
            </mesh> */}
        </EffectComposer>

    );
}


