<script setup>
import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { onMounted, onUnmounted, ref } from 'vue'
const loadingProgress = ref(0)
const loading = ref(true)
const scene = new THREE.Scene() //  创建场景对象Scene
const sizes = {
  // 定义渲染尺寸
  width: window.innerWidth,
  height: window.innerHeight
}
onMounted(() => {
  // 初始化加载管理器
  // https://threejs.org/docs/index.html?q=loadingManager#api/en/loaders/managers/LoadingManager
  const loadingManager = new THREE.LoadingManager()
  // 设置加载开始的回调函数
  loadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
    console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
  }

  // 设置加载进度的回调函数
  loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
    loadingProgress.value = (itemsLoaded / itemsTotal) * 100
    console.log('Loading progress: ' + loadingProgress.value + '%')
  }

  // 设置所有加载完成的回调函数
  loadingManager.onLoad = function () {
    setTimeout(() => {
      loading.value = false
    }, 500)
    console.log('Loading complete!')
  }
  // 加载模型
  const loader = new GLTFLoader(loadingManager)
  loader.load(import.meta.env.BASE_URL + 'gltf/war_thunder_merkava_mk.1__high-quality_model.glb', (gltf) => {
    const model = gltf.scene
    // 给模型设置光滑材质 MeshPhongMaterial
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshPhongMaterial({ shininess: 10 })
      }
    })
    const box = new THREE.Box3().setFromObject(model) // 创建一个Box3并将其设置为模型的边界
    const center = box.getCenter(new THREE.Vector3()) // 计算模型的中心点
    model.position.sub(center) // 将模型的位置设置为其中心点的负值，这将使模型居中
    scene.add(model)
  })
  // 直射光
  const directionLight = new THREE.DirectionalLight(0xffffff, 1)
  directionLight.position.set(300, 300, 300)
  scene.add(directionLight)
  // 初始化相机
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
  camera.position.z = 500
  scene.add(camera)
  // 创建渲染器对象 antialias 开启抗锯齿
  var renderer = new THREE.WebGLRenderer({ antialias: true }) // 创建渲染器对象 antialias 开启抗锯齿
  renderer.setSize(sizes.width, sizes.height) //设置渲染区域尺寸
  renderer.setClearColor('white') //设置背景颜色，0为透明色
  document.querySelector('.canvas').appendChild(renderer.domElement) //body元素中插入canvas对象
  renderer.render(scene, camera) //执行渲染操作   指定场景、相机作为参数
  const controls = new OrbitControls(camera, renderer.domElement) // 创建控制器对象
  controls.enableDamping = true // 开启阻尼效果，使控制更加平滑
  controls.minDistance = 10
  controls.maxDistance = 500
  function render() {
    controls.update() // 更新控制器
    renderer.render(scene, camera) //执行渲染操作
    requestAnimationFrame(render)
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
})
</script>
<template>
  <div class="loading" v-if="loading">{{ loadingProgress }} %</div>
  <div class="canvas" v-show="!loading"></div>
</template>
<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 999;
  font-size: 14px;
  font-weight: bold;
  color: #5a5a5a;
  display: grid;
  place-content: center;
  background: rgba(255, 255, 255, 0.557);
  backdrop-filter: blur(10px);
}
.canvas,
.loading {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
