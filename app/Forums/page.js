import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
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
    <div className="container mx-auto h-screen">
      <h3 className="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">
        Discussion Forums
      </h3>

      <div className="flex flex-wrap justify-center">
        {topics.map((topic) => (
          <div
            key={topic.img}
            className="shadow-lg bg-green-200 w-1/4 m-4 flex justify-center flex-col items-center py-10 rounded-xl gap-4"
          >
            <Image
              alt={topic.desc}
              src={topic.img}
              width={85}
              height={85}
              className=""
            />
            <h2 className="text-2xl">{topic.text}</h2>
            <p className="px-3">{topic.desc}</p>
            <Link href={`/Individual_forum/${topic.slug}`}>
            <Button className="px-4 border border-slate-300 py-2">
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

