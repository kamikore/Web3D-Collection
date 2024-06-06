import {
    Engine3D,
    Scene3D,
    Object3D,
    Camera3D,
    View3D,
    LitMaterial,
    BoxGeometry,
    MeshRenderer,
    DirectLight,
    HoverCameraController,
    AtmosphericComponent
} from '@orillusion/core';


async function demo(){
    await Engine3D.init();

    // 新建场景
    let scene = new Scene3D();
    // 新建天空盒
    let sky = scene.addComponent(AtmosphericComponent);
    // 新建相机
    let cameraObj =  new Object3D();
    let camera = cameraObj.addComponent(Camera3D);
    // 设置相机视角
    camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
    // 设置相机控制器
    let controller = camera.object3D.addComponent(HoverCameraController);
    controller.setCamera(0, 0, 15);
    // 添加相机节点
    scene.addChild(cameraObj);

    // 新建光照
    let light = new Object3D();
    // 添加直接光组件
    let component = light.addComponent(DirectLight);
    // 调整光照参数
    light.rotationX = 45;
    light.rotationY = 30;
    component.intensity = 2;
    // 添加光照对象
    scene.addChild(light);

    // 新建对象
    const obj = new Object3D();
    // 为对象添 MeshRenderer
    let mr = obj.addComponent(MeshRenderer);
    // 设置几何体
    mr.geometry = new BoxGeometry(5, 5, 5);
    // 设置材质
    mr.material = new LitMaterial();

    // 往场景内添加物体
    scene.addChild(obj);

    // 创建View3D对象
    let view = new View3D();
    // 指定渲染的场景
    view.scene = scene;
    // 指定使用的相机
    view.camera = camera;
    // 开始渲染
    Engine3D.startRenderView(view);

}

demo()