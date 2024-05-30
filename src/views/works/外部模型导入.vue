<script setup>
// import * as dat from 'dat.gui' // 引入dat.gui调试工具
import * as THREE from 'three'
// import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { onMounted, onUnmounted } from 'vue'

const scene = new THREE.Scene() //  创建场景对象Scene
// const gui = new dat.GUI() // 创建一个dat.GUI对象
const sizes = {
  // 定义渲染尺寸
  width: window.innerWidth,
  height: window.innerHeight
}
onMounted(() => {
  init()
})
// 初始化场景方法
function init() {
  // 加载模型
  const loader = new GLTFLoader()
  loader.load('/gltf/eric_tripod_table_lamp_white.glb', (gltf) => {
    const model = gltf.scene
    const box = new THREE.Box3().setFromObject(model) // 创建一个Box3并将其设置为模型的边界
    const center = box.getCenter(new THREE.Vector3()) // 计算模型的中心点
    model.position.sub(center) // 将模型的位置设置为其中心点的负值，这将使模型居中
    scene.add(model)
  })

  // 创建辅助坐标系
  // const axesHelper = new THREE.AxesHelper(2000)
  // scene.add(axesHelper)

  // 环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  scene.add(ambientLight)

  // 直射光
  const directionLight = new THREE.DirectionalLight(0xffffff, 1.8)
  directionLight.position.set(100, 100, 100)
  scene.add(directionLight)

  // 初始化相机
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
  camera.position.z = 100
  scene.add(camera)

  // // 在GUI中添加相机位置的控制器
  // const cameraFolder = gui.addFolder('Camera')
  // cameraFolder.add(camera.position, 'x', -100, 100).name('x位置')
  // cameraFolder.add(camera.position, 'y', -100, 100).name('y位置')
  // cameraFolder.add(camera.position, 'z', 0, 1000).name('z位置')
  // cameraFolder.open()

  // 创建渲染器对象 antialias 开启抗锯齿
  var renderer = new THREE.WebGLRenderer({ antialias: true }) // 创建渲染器对象 antialias 开启抗锯齿
  renderer.setSize(sizes.width, sizes.height) //设置渲染区域尺寸
  renderer.setClearColor('white') //设置背景颜色，0为透明色
  document.querySelector('.canvas').appendChild(renderer.domElement) //body元素中插入canvas对象
  renderer.render(scene, camera) //执行渲染操作   指定场景、相机作为参数

  const controls = new OrbitControls(camera, renderer.domElement) // 创建控制器对象
  controls.enableDamping = true // 开启阻尼效果，使控制更加平滑
  controls.minDistance = 10
  controls.maxDistance = 100

  function render() {
    controls.update() // 更新控制器
    renderer.render(scene, camera) //执行渲染操作
    requestAnimationFrame(render) //请求再次执行渲染函数render
  }
  render()

  // 监听窗口变化重新渲染
  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}
</script>
<template>
  <div class="canvas"></div>
</template>
<style lang="scss" scoped>
.canvas {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
