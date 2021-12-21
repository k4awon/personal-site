import './App.css';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Room } from './components/scenes/room';

const canvasContainer = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <canvasContainer>
      <Canvas>
        <Room />
      </Canvas>
    </canvasContainer>
  );
}

export default App;