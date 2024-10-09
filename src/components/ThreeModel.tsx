import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion";
import { useRef } from "react";

const Model = ({
    url,
    scale,
    postion,
    rotation,
}: {
    url: string;
    scale: number;
    postion: number[];
    rotation: number[]
}) => {
    const groupRef = useRef(null);
    const { scene } = useGLTF(url);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.6;

            groupRef.current.rotation.y = state.clock.elapsedTime * 0.8;
        }
    });

    return (
        <group ref={groupRef}>
            <primitive
                object={scene}
                scale={scale}
                position={postion}
                rotation={rotation}
            />
        </group>
    );
};

const ThreeModel = () => {
    return (
        <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                type: "spring",
                duration: 0.8,
                delay: 0.9,
                stiffness: 200
            }}
            className="w-full h-[500px]">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={3} />
                <Model
                    url="/src/assets/models/scene.gltf"
                    scale={2.34}
                    postion={[4.8, 2.8, 1.4]}
                    rotation={[Math.PI / 10, 0, Math.PI / 6]}
                />
                <OrbitControls />
            </Canvas>
        </motion.div>
    );
};

export default ThreeModel