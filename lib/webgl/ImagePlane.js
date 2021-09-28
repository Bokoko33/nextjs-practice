export class ImagePlane {
  constructor(mesh, img) {
    this.refImage = img;
    this.mesh = mesh;
  }

  setParams(canvasSize) {
    // 参照するimg要素から大きさ、位置を取得してセット
    const rect = this.refImage.getBoundingClientRect();

    this.mesh.scale.x = rect.width;
    this.mesh.scale.y = rect.height;

    const x = rect.left - canvasSize.w / 2 + rect.width / 2;
    const y = -rect.top + canvasSize.h / 2 - rect.height / 2;
    this.mesh.position.set(x, y, this.mesh.position.z);
  }

  update(canvasSize, current, offset) {
    this.setParams(canvasSize);

    this.mesh.material.uniforms.uTime.value++;

    this.mesh.material.uniforms.uCurrent.value = current;
    this.mesh.material.uniforms.uValue.value = offset;
  }
}
