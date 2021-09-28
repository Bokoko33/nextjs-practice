import { Stage } from './Stage';
import { GalleryGL } from './GalleryGL';

export class mainGL {
  constructor(props) {
    this.canvasEl = props.canvasEl;
    this.wrapperEl = props.wrapperEl;
    this.stage = new Stage(this.canvasEl, this.wrapperEl);
    this.stage.renderer.setClearColor(0xff0000);

    this.galleryGL = null;
  }

  loop = () => {
    if (this.galleryGL) {
      this.galleryGL.loop();
    }
    this.stage.loop();
  };

  resize = () => {
    this.stage.resize();
  };

  dispose = () => {
    this.stage.dispose();
  };

  initGalleryGL = (htmlEl, scrollAreaEl, imgElArray) => {
    this.galleryGL = new GalleryGL({
      htmlEl,
      scrollAreaEl,
      imgElArray,
      stage: this.stage,
    });
  };
}
