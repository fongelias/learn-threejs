// lets render a scene, camera, and renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
	75, // Field of View
	window.innerWidth / window.innerHeight, // aspect ratio
	0.1, // near clipping plane
	1000 // far clipping plane
);
// The clipping plane defines the borders of what is rendered,
// based on their distance

const renderer = new THREE.WebGLRenderer();
renderer.setSize(
	window.innerWidth,
	window.innerHeight,
);
document.body.appendChild(renderer.domElement);





// Now, lets add some objects to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;


// You still shouldn't see anything at this point—
// to begin rendering, you need to make an render/animate loop
// this will cause the renderer to draw the scene every time
// the screen is refereshed. This is used over something like
// setInterval for features such as pausing when a user navigates
// to another tab
const animate = () => {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	// rotate the cube to make the animation more interesting
	cube.rotation.x += 0.001;
	cube.rotation.y += 0.001;
}
animate();


