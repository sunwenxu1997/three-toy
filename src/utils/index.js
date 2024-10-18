// 封装一个GLTFLoader的Promise方法
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function GLTFLoaderFun(models) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()
        loader.load(models, (gltf) => {
            resolve(gltf)
        }, undefined, (error) => {
            reject(error)
        })
    })
}