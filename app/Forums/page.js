import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Link } from 'lucide-react';
const topics = [
  {
    text: "Python",
    img: "/python.webp",
    desc: "Lets discuss everything related to Python",
    slug: "Python-discuss"
  },
  {
    text: "JavaScript",
    img: "/js.webp",
    desc: "Learn and share JavaScript knowledge.",
    slug: "Javascript-discuss"
  },
  {
    text: "React",
    img: "/react.webp",
    desc: "Build amazing user interfaces with React.",
    slug: "React-discuss"
  },
  {
    text: "CSS",
    img: "/css.webp",
    desc: "Explore the world of designing and CSS.",
    slug: "CSS-discuss"
  },
  {
    text: "Web Development",
    img: "/webd.webp",
    desc: "All things web development – front to back.",
    slug: "Web-Development-discuss"
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
              width={74}
              height={74}
              className=""
            />
            <h2 className="text-2xl">{topic.text}</h2>
            <p className="px-3">{topic.desc}</p>
            <Link href={`/forum/${topic.slug}`}>
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

