import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x91c5cc );
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const loaderFont = new FontLoader();
loaderFont.load( 'fonts/Binoma_Trial_Bold.json', function ( font ) {
    const geometry = new TextGeometry( 'Bonjour !', {
        font: font,
        size: 1,
        height: 0.1,
        curveSegments: 12, 

    } );
    const textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({ color: 0xff0000 }), // front
        new THREE.MeshPhongMaterial({ color: 0x00ff00 }) // side
    ])
    textMesh.castShadow = true;
    textMesh.position.x = -3;
    textMesh.position.y = 1;
    textMesh.position.z = 0;
    scene.add(textMesh);
} );

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.03;

	renderer.render( scene, camera );
    requestAnimationFrame( animate );

}
animate();