import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Calendar,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  MapPin,
  Leaf,
} from "lucide-react";

/* ---------------------------------------------------------
   Content — pulled from the Figma "10-Blog-Page" design
--------------------------------------------------------- */

const NAV_LINKS = ["Home", "Shop", "Pages", "Blog", "Contact"];

const CATEGORY_TAGS = ["Business", "Healthy", "Pastas", "Tomatos", "Topics", "Organic"];

const SIDEBAR_CATEGORIES = [
  { label: "Vegetables items", count: 14 },
  { label: "Herbel Medicine", count: 21 },
  { label: "Olive Oil massage", count: 17 },
  { label: "Organic Foods", count: 9 },
  { label: "Fishes & meats", count: 265 },
];

const LATEST_BLOGS = [
  {
    title: "It is a long established Cont popular traditional",
    date: "27 July, 2020",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=160&h=160&fit=crop",
  },
  {
    title: "Contrary to popular tradi lorem ipsum is not simply",
    date: "27 July, 2020",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=160&h=160&fit=crop",
  },
  {
    title: "Lorem Ipsum has been the industry's standard dummy",
    date: "27 July, 2020",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=160&h=160&fit=crop",
  },
  {
    title: "It is a long established Cont popular traditional",
    date: "27 July, 2020",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=160&h=160&fit=crop",
  },
];

const BLOG_POSTS = [
  {
    title: "Lorem Ipsum has been the industry's standard dummy text ever since",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
    date: "July 27, 2020",
    comments: "1 Comments",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&h=600&fit=crop",
    variant: "default",
  },
  {
    title: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
    date: "July 27, 2020",
    comments: "1 Comments",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&h=600&fit=crop",
    variant: "slider",
  },
  {
    title: "Generate Lorem Ipsum placeholder text for use in your graphic",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
    date: "July 27, 2020",
    comments: "1 Comments",
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&h=600&fit=crop",
    variant: "video",
  },
  {
    title: "Simply popular belief tradition Reference about Lorem Ipsum, giving informat",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that",
    date: "July 27, 2020",
    comments: "1 Comments",
    img: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=900&h=600&fit=crop",
    variant: "default",
  },
];

const FOOTER_LINKS = ["About", "News", "Partners", "Room Details", "Gallery", "Contacts"];
const HELP_LINKS = ["FAQ", "Term & conditions", "Reporting", "Documentation", "Support Policy", "Privacy"];

/* ---------------------------------------------------------
   Small building blocks
--------------------------------------------------------- */

function SectionHeading({ children }) {
  return (
    <div className="relative mb-6">
      <h3 className="text-2xl font-bold text-[#232323]">{children}</h3>
      <div className="mt-3 h-px w-full bg-gray-200" />
      <div className="absolute left-16 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-600" />
    </div>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a
      href="#"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-green-600 hover:bg-green-600 hover:text-white"
    >
      <Icon size={16} />
    </a>
  );
}

/* ---------------------------------------------------------
   Header
--------------------------------------------------------- */

function TopBar() {
  return (
    <div className="hidden bg-[#133344] text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm">
        <span className="text-white/90">Welcome to Cabbage!</span>
        <div className="flex items-center gap-6 text-white/90">
          <span className="flex items-center gap-2">
            <Phone size={14} /> Call: +1 800 833 9780
          </span>
          <span className="cursor-pointer">EN</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [query, setQuery] = useState("");
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-[#232323]">
          <Leaf className="text-green-600" size={28} />
          Cabbage
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                link === "Blog" ? "text-green-600" : "text-[#232323]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find products"
              className="w-56 rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-4 pr-11 text-sm outline-none focus:border-green-600"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-[#232323]">
            <ShoppingCart size={18} />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#f3f7f0] md:h-80">
      <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-green-100/60 blur-2xl" />
      <div className="absolute -right-6 bottom-6 h-24 w-24 rounded-full bg-green-100/60 blur-2xl" />
      <div className="relative text-center">
        <h1 className="text-4xl font-bold text-[#232323] md:text-5xl">Blog Page</h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#133344]">
          <span>Home</span>
          <ChevronRight size={14} className="text-green-600" />
          <span className="text-green-600">Blog</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Blog list
--------------------------------------------------------- */

function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="relative h-64 w-full overflow-hidden md:h-80">
        <img
          src={post.img}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {post.variant === "video" && (
          <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-600 shadow-lg">
            <Play size={22} fill="currentColor" />
          </button>
        )}

        {post.variant === "slider" && (
          <>
            <button className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#232323] shadow">
              <ChevronLeft size={18} />
            </button>
            <button className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#232323] shadow">
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-4 flex items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> {post.date}
          </span>
          <span className="h-3 w-px bg-gray-300" />
          <span className="flex items-center gap-1.5">
            <MessageCircle size={14} /> {post.comments}
          </span>
        </div>
        <h2 className="mb-4 text-xl font-bold leading-snug text-[#232323] transition-colors group-hover:text-green-600 md:text-2xl">
          {post.title}
        </h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-500 md:text-base">{post.excerpt}</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:underline"
        >
          Read More <ChevronRight size={14} />
        </a>
      </div>
    </article>
  );
}

function Pagination() {
  const pages = [1, 2, 3, 4];
  const [active, setActive] = useState(1);
  return (
    <div className="mt-14 flex items-center justify-center gap-2">
      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-green-600 hover:text-green-600">
        <ChevronLeft size={16} />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setActive(p)}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
            active === p ? "bg-green-600 text-white" : "border border-gray-200 text-gray-500 hover:border-green-600 hover:text-green-600"
          }`}
        >
          {p}
        </button>
      ))}
      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-green-600 hover:text-green-600">
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

function BlogList() {
  return (
    <div className="lg:col-span-2">
      <div className="flex flex-col gap-10">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

/* ---------------------------------------------------------
   Sidebar
--------------------------------------------------------- */

function AboutMeWidget() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-[#f7faf5] p-8 text-center">
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop"
        alt="Jehnny Rose"
        className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-white"
      />
      <h4 className="mt-4 text-lg font-bold text-[#232323]">Jehnny Rose</h4>
      <p className="text-sm text-gray-500">Traveller / Photographer</p>
      <div className="mt-3 flex items-center justify-center gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} fill="currentColor" />
        ))}
        <span className="ml-1 text-xs text-gray-400">(1 Review)</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
      </p>
      <div className="mt-5 flex items-center justify-center gap-2">
        <SocialIcon Icon={Facebook} />
        <SocialIcon Icon={Twitter} />
        <SocialIcon Icon={Instagram} />
        <SocialIcon Icon={Youtube} />
      </div>
    </div>
  );
}

function SearchWidget() {
  return (
    <div>
      <SectionHeading>Search</SectionHeading>
      <div className="relative">
        <input
          placeholder="Search for posts"
          className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-5 pr-14 text-sm outline-none focus:border-green-600"
        />
        <button className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-green-600 text-white">
          <Search size={15} />
        </button>
      </div>
    </div>
  );
}

function CategoriesWidget() {
  return (
    <div>
      <SectionHeading>Categories</SectionHeading>
      <ul className="flex flex-col gap-2">
        {SIDEBAR_CATEGORIES.map((cat) => (
          <li key={cat.label}>
            <a
              href="#"
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-[#f7faf5] px-5 py-3 text-sm text-[#232323] transition-colors hover:border-green-600 hover:text-green-600"
            >
              <span>{cat.label}</span>
              <span className="text-gray-400">({cat.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LatestBlogsWidget() {
  return (
    <div>
      <SectionHeading>Latest Blogs</SectionHeading>
      <ul className="flex flex-col gap-5">
        {LATEST_BLOGS.map((post, i) => (
          <li key={i} className="flex gap-4">
            <img src={post.img} alt={post.title} className="h-[74px] w-[84px] shrink-0 rounded-xl object-cover" />
            <div>
              <span className="mb-1.5 flex items-center gap-1.5 text-xs text-gray-400">
                <Calendar size={12} /> {post.date}
              </span>
              <a href="#" className="text-sm font-medium leading-snug text-[#232323] hover:text-green-600">
                {post.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FollowUsWidget() {
  return (
    <div>
      <SectionHeading>Follow Us</SectionHeading>
      <div className="flex items-center gap-2">
        <SocialIcon Icon={Facebook} />
        <SocialIcon Icon={Twitter} />
        <SocialIcon Icon={Instagram} />
        <SocialIcon Icon={Youtube} />
      </div>
    </div>
  );
}

function CategoryTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORY_TAGS.map((tag) => (
        <a
          key={tag}
          href="#"
          className="rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-gray-500 transition-colors hover:border-green-600 hover:text-green-600"
        >
          {tag}
        </a>
      ))}
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="flex flex-col gap-10">
      <AboutMeWidget />
      <SearchWidget />
      <CategoriesWidget />
      <LatestBlogsWidget />
      <div>
        <SectionHeading>More Topics</SectionHeading>
        <CategoryTags />
      </div>
      <FollowUsWidget />
    </aside>
  );
}

/* ---------------------------------------------------------
   Footer
--------------------------------------------------------- */

function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-[#0e2118] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <h4 className="mb-5 text-lg font-bold">About Us.</h4>
          <p className="text-sm leading-relaxed text-white/60">
            Corporate clients and leisure travelers have been relying on Cabbage for dependable, safe, and
            professional organic-food service in major cities across the world.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Youtube} />
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-bold">Useful Links</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            {FOOTER_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-green-400">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-bold">Help?</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            {HELP_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-green-400">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <a href="#" className="mb-4 flex items-center gap-2 text-xl font-bold">
            <Leaf className="text-green-400" size={22} />
            Cabbage
          </a>
          <p className="text-sm leading-relaxed text-white/60">
            We are a team of designers and developers who create high quality organic-food experiences.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/60">
            <MapPin size={14} /> 254 Lillian Blvd, Holbrook
          </p>
          <div className="mt-5 flex overflow-hidden rounded-full bg-white/5">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none"
            />
            <button className="shrink-0 whitespace-nowrap bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        © Cabbage {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------
   Page
--------------------------------------------------------- */

export default function CabbageBlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Header />
      <Hero />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <BlogList />
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
}
