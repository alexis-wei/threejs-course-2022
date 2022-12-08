// Create a scene with lights and shadows
import * as THREE from 'three'
import { run, scene, camera, renderer, update } from 'three-kit'
import Inspector from 'three-inspect'

renderer.shadowMap.enabled = true

THREE.ColorManagement.legacyMode = false

camera.position.set(0, 5, 5)

let meshes: THREE.Object3D[] = []
let materials: THREE.Material[] = []

// Add an ambient light
{
  const ambient = new THREE.AmbientLight()
  ambient.intensity = 0.8
  scene.add(ambient)
}

// Try adding a box 
{
  const geometry = new THREE.BoxGeometry(1, 2, 3)
  const material = new THREE.MeshPhysicalMaterial({})
  material.color = new THREE.Color(0xffffff)
  material.reflectivity = 0.5
  material.transmission = 1.0
  material.roughness = 0.2
  material.metalness = 0.5
  materials.push(material)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.name = 'Box1'
  scene.add(mesh)
  meshes.push(mesh)
}


new Inspector(THREE, scene, camera, renderer)

run()