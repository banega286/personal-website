import Image from "next/image";
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

const sections = [
  { name: 'About', file: 'about.md' },
  { name: 'Projects', file: 'projects.md' },
  { name: 'Blog', file: 'blog.md' },
  { name: 'Contact', file: 'contact.md' },
];

const socials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kd_2806_/',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <rect width="20" height="20" x="2" y="2" rx="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/khoanguyen286/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/banega286/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
      </svg>
    ),
  },
];

function getMarkdownContent(file: string) {
  const filePath = path.join(process.cwd(), 'content', file);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf8');
  }
  return '# Coming soon!';
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-white text-gray-800 font-sans">
      <header className="py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-green-800 mb-2">Khoa Nguyen</h1>
        <p className="text-lg text-green-600 mb-4">Welcome to my personal website</p>
        <nav className="flex gap-6 text-green-700 font-medium">
          {sections.map((section) => (
            <a key={section.name} href={`#${section.name.toLowerCase()}`} className="hover:underline">
              {section.name}
            </a>
          ))}
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="/assets/Khoa_Nguyen_Resume.pdf" target="_blank" rel="noopener" className="hover:underline text-green-900 font-semibold">Resume</a>
        </nav>
      </header>
      <div className="max-w-2xl mx-auto space-y-16 pb-16">
        {sections.map((section) => (
          <section key={section.name} id={section.name.toLowerCase()} className="bg-white/80 rounded-xl shadow p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-green-700 mb-4">{section.name}</h2>
            <article className="prose prose-green max-w-none">
              <MDXRemote source={getMarkdownContent(section.file)} />
            </article>
          </section>
        ))}
        <section id="socials" className="bg-white/80 rounded-xl shadow p-8 border border-green-100 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Socials</h2>
          <div className="flex gap-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 transition"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>
        <section id="gallery" className="bg-white/80 rounded-xl shadow p-8 border border-green-100">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Gallery</h2>
          <p>Coming soon!</p>
        </section>
        <section id="resume" className="bg-white/80 rounded-xl shadow p-8 border border-green-100 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Resume</h2>
          <a href="/assets/Khoa_Nguyen_Resume.pdf" target="_blank" rel="noopener" className="px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition">Download My Resume (PDF)</a>
        </section>
      </div>
      <footer className="text-center text-green-600 py-8 opacity-80">
        &copy; {new Date().getFullYear()} Khoa Nguyen. All rights reserved.
      </footer>
    </main>
  );
}
