import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProductCategoriesSection from '@/components/home/ProductCategoriesSection';
import BrandsSection from '@/components/home/BrandsSection';
import GallerySection from '@/components/home/GallerySection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductCategoriesSection />
      <BrandsSection />
      <GallerySection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}