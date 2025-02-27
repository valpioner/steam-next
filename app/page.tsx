import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <div className=''>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Hero />
        HomePage Content
      </main>
    </div>
  );
}
