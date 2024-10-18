<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { onMounted } from 'vue'
let camera, scene, renderer
onMounted(() => {
  init()
})

function init() {
  const _path = import.meta.env.BASE_URL
  const container = document.getElementById('canvas')

  // PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number ) : Camera 透视相机
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20)
  // .position 相机位置 set(x: Number, y: Number, z: Number) 设置相机的位置
  camera.position.set(-1.8, 0.6, 2.7)

  // Scene 场景
  scene = new THREE.Scene()

  // RGBELoader 用于加载 HDR 环境贴图
  new RGBELoader().setPath(_path + 'textures/equirectangular/').load('royal_esplanade_1k.hdr', function (texture) {
    // EquirectangularReflectionMapping 等距反射映射
    texture.mapping = THREE.EquirectangularReflectionMapping
    // 设置背景和环境贴图
    scene.background = texture
    scene.environment = texture

    render()
    // GLTFLoader 用于加载 glTF 文件 .setPath 设置 glTF 文件所在的路径
    const loader = new GLTFLoader().setPath(_path + 'models/gltf/DamagedHelmet/glTF/')
    loader.load('DamagedHelmet.gltf', async function (gltf) {
      const model = gltf.scene
      // 等待直到模型可以添加到场景中，而不会因为着色器编译而阻塞
      await renderer.compileAsync(model, camera, scene)
      scene.add(model)
      render()
    })
  })

  // WebGLRenderer 渲染器 antialias 抗锯齿
  renderer = new THREE.WebGLRenderer({ antialias: true })
  // .setPixelRatio 设置设备像素比
  // window.devicePixelRatio 设备像素比
  renderer.setPixelRatio(window.devicePixelRatio)
  // .setSize 设置渲染器的大小
  renderer.setSize(window.innerWidth, window.innerHeight)
  // .toneMapping 色调映射
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  // .toneMappingExposure 色调映射曝光
  renderer.toneMappingExposure = 1
  container.appendChild(renderer.domElement)

  // OrbitControls 轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  // .addEventListener 添加事件监听 change 事件 当控制器的属性发生变化时调用
  controls.addEventListener('change', render)
  // .minDistance 最小距离
  controls.minDistance = 2
  // .maxDistance 最大距离
  controls.maxDistance = 10
  // .target 目标 设置控制器的焦点 默认为(0, 0, 0) 也就是场景的中心
  controls.target.set(0, 0, -0.2)
  // .update 更新 控制器的更新 在每帧渲染之前调用 以确保控制器的属性是最新的
  controls.update()

  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  // 更新相机的投影矩阵 以确保宽高比正确 以及更新渲染器的大小
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)

  render()
}

//

function render() {
  renderer.render(scene, camera)
}
</script>
<template>
  <div id="canvas"></div>
</template>
<style lang="scss" scoped></style>
