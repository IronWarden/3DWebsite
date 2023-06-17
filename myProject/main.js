import './style.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { TextureLoader } from 'three';
import WebGL from '../WebGl';
import Initialize from './initialize';

// throws a warning if users browser does not support WebGL
if(!WebGL.isWebGLAvailable()) {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}

Initialize.setScene();



