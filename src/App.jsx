import './App.css'
import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Environment, Effects, useTexture } from '@react-three/drei'

export default function App() {

 return ( <Canvas>
    <ambientLight color="white" position={[0,0,0]} />
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[3, 60, 60]}/>
      <meshStandardMaterial color="pink" />
    </mesh>
  </Canvas>);
}
