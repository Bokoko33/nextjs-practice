import { WebGLRenderer, Scene, PerspectiveCamera } from 'three';

export class Stage {
  constructor(canvasEl, canvasWrapperEl) {
    this.canvasEl = canvasEl;
    this.canvasWrapperEl = canvasWrapperEl;

    this.canvasSize = {
      w: this.canvasWrapperEl.clientWidth,
      h: this.canvasWrapperEl.clientHeight,
    };

    this.renderer = new WebGLRenderer({
      canvas: this.canvasEl,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvasSize.w, this.canvasSize.h);
    this.renderer.setClearColor(0xffffff);

    this.scene = new Scene();

    const fov = 45;
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist = this.canvasSize.h / 2 / Math.tan(fovRad);
    this.camera = new PerspectiveCamera(
      fov,
      this.canvasSize.w / this.canvasSize.h,
      0.1,
      10000
    );
    this.camera.position.z = dist;
  }

  loop = () => {
    this.renderer.render(this.scene, this.camera);
  };

  resize = () => {
    const width = this.canvasWrapperEl.clientWidth;
    const height = this.canvasWrapperEl.clientHeight;

    this.canvasSize.w = width;
    this.canvasSize.h = height;

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    // カメラの距離を計算し直す
    const fov = 45;
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist = this.canvasSize.h / 2 / Math.tan(fovRad);
    this.camera.position.z = dist;
  };

  dispose = () => {
    this.renderer.dispose();
  };
}
