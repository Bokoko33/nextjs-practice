import {
  PlaneBufferGeometry,
  ShaderMaterial,
  Mesh,
  TextureLoader,
} from 'three';
import { Stage } from './Stage';
import { ImagePlane } from './ImagePlane';

const loader = new TextureLoader();

// Planeメッシュを作る関数
const createMesh = (img) => {
  const texture = loader.load(img.dataset.img);

  const uniforms = {
    uTexture: { value: texture },
    uImageAspect: { value: img.naturalWidth / img.naturalHeight },
    uPlaneAspect: { value: img.clientWidth / img.clientHeight },
    uValue: { value: 0 },
    uCurrent: { value: 0 },
    uTime: { value: 0 },
  };
  const geo = new PlaneBufferGeometry(1, 1, 100, 100); // 後から画像のサイズにscaleするので1にしておく
  const mat = new ShaderMaterial({
    uniforms,
    vertexShader: `
    varying vec2 vUv;
      uniform float uValue;
      uniform float uCurrent;
      uniform float uTime;

      float PI = 3.1415926535897932384626433832795;

      void main(){
          vUv = uv;
          vec3 pos = position;

          float time = uTime * 0.02;

          // くねくね
          float amp = 18.0; // 振幅（の役割） 大きくすると波が大きくなる
          float freq = 8.0; // 振動数（の役割） 大きくすると波が細かくなる
          float intens = 0.0055; // 激しさ

          // はり
          float tension = -0.0001 * uValue; // 左右の張り具合

          pos.x += sin(pos.y * freq + uCurrent * intens + time) * 0.006;
          pos.x += cos(pos.y * PI) * tension;
          pos.z += sin(pos.x * freq + uCurrent * intens + time) * amp;

          // pos.y = pos.y + sin(pos.x * PI  * 0.006 * uValue) * amp * 0.002 ;
          // pos.z = pos.z + sin(pos.x * PI * 0.001 * uValue) * amp ;
          // pos.x = pos.x + (cos(pos.y * PI) * tension);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
    varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float uImageAspect;
      uniform float uPlaneAspect;
      uniform float uValue;

      void main(){
        // 画像のアスペクトとプレーンオブジェクトのアスペクトを比較し、短い方に合わせる
        vec2 ratio = vec2(
          min(uPlaneAspect / uImageAspect, 1.0),
          min((1.0 / uPlaneAspect) / (1.0 / uImageAspect), 1.0)
        );

        // 計算結果を用いてテクスチャを中央に配置
        vec2 fixedUv = vec2(
          (vUv.x - 0.5) * ratio.x + 0.5,
          (vUv.y - 0.5) * ratio.y + 0.5
        );

        vec2 offset = vec2(0.0, uValue * 0.000);
        float r = texture2D(uTexture, fixedUv + offset).r;
        float g = texture2D(uTexture, fixedUv + offset * 0.5).g;
        float b = texture2D(uTexture, fixedUv).b;
        vec3 texture = vec3(r, g, b);

        gl_FragColor = vec4(texture, 1.0);
      }

    `,
  });

  const mesh = new Mesh(geo, mat);

  return mesh;
};

// 開始と終了をなめらかに補間する関数
const lerp = (start, end, multiplier) => {
  return (1 - multiplier) * start + multiplier * end;
};

export class GalleryGL {
  constructor(props) {
    this.stage = props.stage;

    this.htmlEl = props.htmlEl;
    this.scrollAreaEl = props.scrollAreaEl;
    this.imgElArray = props.imgElArray;
    this.imagePlaneArray = [];

    this.currentScrollY = 0;
    this.scrollValue = 0;

    for (const img of this.imgElArray) {
      const mesh = createMesh(img);
      this.stage.scene.add(mesh);

      const imagePlane = new ImagePlane(mesh, img);
      imagePlane.setParams(this.stage.canvasSize);

      this.imagePlaneArray.push(imagePlane);
    }
  }

  loop = () => {
    console.log('g');
    // スクロール位置を更新
    this.currentScrollY = lerp(this.currentScrollY, this.htmlEl.scrollTop, 0.1);
    this.scrollValue = this.htmlEl.scrollTop - this.currentScrollY;
    this.scrollAreaEl.style.transform = `translate3d(${-this
      .currentScrollY}px,0,0)`;

    const scrollPos = -this.scrollAreaEl.getBoundingClientRect().left;
    for (const plane of this.imagePlaneArray) {
      plane.update(this.stage.canvasSize, scrollPos, this.scrollValue);
    }

    this.stage.loop();
  };
}
