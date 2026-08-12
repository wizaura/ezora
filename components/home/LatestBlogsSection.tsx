import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import { Blog } from "@/types/blogs.type";

type LatestBlogsSectionProps = {
  blogs: Blog[];
};

export default function LatestBlogsSection({
  blogs,
}: LatestBlogsSectionProps) {
  if (!blogs.length) {
    return null;
  }

  const featuredBlog = blogs[0];
  const secondaryBlogs = blogs.slice(1);

  if (!featuredBlog) return null;

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 pb-10 lg:grid-cols-12 lg:items-end lg:pb-14">
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sea" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                Latest From Ezora
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
              Travel inspiration,
              <span className="block text-dark-grey-blue/55">
                local knowledge.
              </span>
            </h2>
          </div>

          {/* Header Right */}
          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
              Explore practical Kerala travel guides, destination ideas and
              expert fleet advice to help you plan a smoother, more memorable
              journey.
            </p>

            <Link
              href="/blogs"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-dark-cerulean"
            >
              View all articles

              <ArrowUpRight
                size={17}
                className="text-sea transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Blog Layout */}
        <div className="grid gap-5 lg:grid-cols-12">
          {/* Featured Blog */}
          <FeaturedBlogCard blog={featuredBlog} />

          {/* Secondary Blogs */}
          <div className="grid gap-5 lg:col-span-5">
            {secondaryBlogs.map((blog) => (
              <SecondaryBlogCard
                key={blog.id}
                blog={blog}
              />
            ))}
          </div>
        </div>

        {/* Bottom Mobile CTA */}
        <div className="mt-8 flex justify-center lg:hidden">
          <Link
            href="/blogs"
            className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-dark-cerulean px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-greenish-blue"
          >
            Explore All Articles

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedBlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group relative min-h-[560px] overflow-hidden rounded-[28px] bg-dark-cerulean lg:col-span-7 lg:min-h-[680px]">
      {/* Background Image */}
      <Image
        src={blog.featuredImage || "/images/logos/logo-main-2.png"}
        alt={blog.title}
        fill
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 1024px) 100vw, 58vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/5" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

      <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/45 to-transparent" />

      {/* Top Content */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-6 sm:p-8">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          Featured Article
        </span>

        <span
          aria-label={`Read ${blog.title}`}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-sea group-hover:bg-sea"
        >
          <ArrowUpRight size={19} />
        </span>
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-light-sea-green">
          {blog.category}
        </p>

        {/* Title */}
        <h3 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
          {blog.excerpt}
        </p>
      </div>
    </Link>
  );
}

function SecondaryBlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="group grid min-h-[330px] overflow-hidden rounded-[28px] border border-border bg-surface-soft sm:grid-cols-[0.9fr_1.1fr] lg:min-h-0 lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
      {/* Image */}
      <Link
        href={`/blogs/${blog.slug}`}
        className="relative min-h-[260px] overflow-hidden sm:min-h-0 lg:min-h-[220px] xl:min-h-0"
        aria-label={`Read ${blog.title}`}
      >
        <Image
          src={blog.featuredImage || "/images/logos/logo-5.png"}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 25vw"
        />

        <div className="absolute inset-0 bg-dark-cerulean/10" />
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-between p-6">
        <div>
          {/* Category */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-greenish-blue">
            {blog.category}
          </p>

          {/* Title */}
          <h3 className="mt-3 text-2xl font-semibold leading-[1.08] tracking-[-0.04em] text-dark-cerulean">
            <Link
              href={blog.slug}
              className="transition-colors duration-300 hover:text-greenish-blue"
            >
              {blog.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted">
            {blog.excerpt}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">

          <Link
            href={blog.slug}
            aria-label={`Read ${blog.title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-dark-cerulean transition-all duration-300 group-hover:border-sea group-hover:bg-sea group-hover:text-white"
          >
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}