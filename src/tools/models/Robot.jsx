/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Model() {
    const { nodes, materials } = useGLTF("3d/scene.gltf");
    return (
        <group dispose={null}>
            <mesh
                geometry={nodes.Object_2.geometry}
                material={materials.material_0}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
                position={[0, -1.5, 0]}
            >
                <meshNormalMaterial attach="material" />
                {/* TODO: THREE.GLTFLoader: Unknown extension "KHR_materials_pbrSpecularGlossiness". Cette extension n'est plus prise en charge par three.js
                je peux convertir le modèle avec les nouvelles extensions (https://gltf.report/) ou bien en utiliser un autre 
                https://discourse.threejs.org/t/gltf-color-textures-missing-babylon-display-works/50424/4*/}
            </mesh>
        </group>
    );
}
