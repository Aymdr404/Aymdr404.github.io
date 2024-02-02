import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let container;

function onMouseMove( event ) {
	mouse.x = ( event.clientX / container.clientWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / container.clientHeight ) * 2 + 1;
}

container = document.querySelector('.scene');

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x91c5cc );

const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 30, 20, 10 );
light.castShadow = true;
scene.add( light );
scene.add( light.target );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

//################### 3D MODEL ###################

const modelContainer = new THREE.Group();
scene.add(modelContainer);

const geometry = new THREE.BoxGeometry( 10, 10, 0 );
const material = new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh( geometry, material );
cube.position.z = -0.01;
scene.add( cube );


let object = [
    {name: 'about', link: 'about.html', position: [0, 2, 0]},
    {name: 'projects', link: 'projects.html', position: [0, 1, 0]},
    {name: 'contact', link: 'contact.html', position: [0, 0, 0]},
    {name: 'resume', link: 'resume.html', position: [0, -1, 0]},
    {name: 'github', link: 'https://github.com/Aymdr404/portfolio', position: [0, -2, 0]}
]

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
    modelContainer.add(textMesh);
    
    textMesh.castShadow = true;
    textMesh.position.x = -3;
    textMesh.position.y = 3;
    textMesh.position.z = 0;
    scene.add(textMesh);
} );


camera.rotation.x = -0.15;
camera.position.z = 10;

function animate() {
	renderer.render( scene, camera );

    raycaster.setFromCamera( mouse, camera );
	const intersects = raycaster.intersectObjects(modelContainer.children);
  if (intersects.length > 0) {
    container.style.cursor = "pointer";
  } else {
    container.style.cursor = "initial"; 
  }


    modelContainer.children.forEach((child) => {
        child.rotation.y += 0.01;
    });

    requestAnimationFrame( animate );

}

function onMouseClick() {
    raycaster.setFromCamera( mouse, camera );
      const intersects = raycaster.intersectObjects(modelContainer.children);
    if (intersects.length > 0) {
      const { link } = intersects[0].object.userData;
      window.open(link, '_blank');
    }
}

window.addEventListener('mousemove', onMouseMove, false);

window.addEventListener('click', onMouseClick, false);

animate();

  