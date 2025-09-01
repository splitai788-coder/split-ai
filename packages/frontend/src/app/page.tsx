import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';

export default function LandingPage() {
  return (
    // We use a main tag to wrap the entire page content
    <main className="bg-gray-900">
      <Header />
      <Hero />
      {/* The Features section will go here next */}
    </main>
  );
}