import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-base-200 px-6 py-10 shadow-xl md:grid-cols-2 md:px-12 lg:px-16">
        {/* Left Side */}
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            📚 Discover Your Next Read
          </span>

          <h1 className="text-4xl font-bold leading-tight text-base-content md:text-5xl lg:text-6xl">
            Books to <span className="text-primary">freshen up</span> your
            bookshelf
          </h1>

          <p className="max-w-lg text-base leading-7 text-base-content/60 md:text-lg">
            Explore our collection of amazing books and find your next favorite
            story, knowledge, or inspiration.
          </p>

          <Link href="/books">
            <button className="btn btn-primary rounded-full px-7 shadow-lg">
              View The List
              <span>→</span>
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={bannerImage}
              alt="Books"
              priority
              className="h-auto w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
