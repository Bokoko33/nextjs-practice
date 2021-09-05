import { MV } from '../components/page/page-index/mv';
import { SectionGallery } from '../components/page/page-index/sectionGallery';
import { SectionAbout } from '../components/page/page-index/sectionAbout';

export default function Home() {
  return (
    <>
      <MV />
      <SectionGallery />
      <SectionAbout />
    </>
  );
}
