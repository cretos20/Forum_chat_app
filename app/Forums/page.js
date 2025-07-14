import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const topics = [
  {
    text: "Python",
    img: "/python.webp",
    desc: "Let’s discuss Python – code, tips, tricks, and more.",
    slug: "python-chat-new"
  },
  {
    text: "JavaScript",
    img: "/js.webp",
    desc: "Learn and share JavaScript knowledge every single day.",
    slug: "js-chat-new"
  },
  {
    text: "React",
    img: "/react.webp",
    desc: "Build stunning interfaces using the power of React.",
    slug: "react-chat-new"
  },
  {
    text: "CSS",
    img: "/css.webp",
    desc: "Explore web design and CSS to craft beautiful pages.",
    slug: "css-chat-new"
  },
  {
    text: "Web",
    img: "/webd.webp",
    desc: "All things web dev – frontend to backend, start to finish.",
    slug: "web-chat-new"
  }
];

const Forums = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h3 className="text-4xl font-bold text-center mb-12 text-black">
        Discussion Forums
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <div
            key={topic.slug}
            className="bg-green-100 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <Image
              alt={topic.desc}
              src={topic.img}
              width={85}
              height={85}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold text-emerald-900 mb-2">
              {topic.text}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 px-2">
              {topic.desc}
            </p>
            <Link href={`/Individual_forum/${topic.slug}`}>
              <Button className="bg-slate-900 hover:bg-emerald-700 text-white px-5 py-2 rounded-md">
                Discuss now
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
