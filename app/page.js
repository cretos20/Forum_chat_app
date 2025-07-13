import Image from "next/image";
export default function HomeFeatures() {
  return (
    <div className="min-h-screen bg-green-950 text-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center border-b">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('background.jpg')" }}
        />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-emerald-300">TopicHive</span>
          </h1>
          <p className="mb-10 text-lg sm:text-xl text-gray-50">
            Discover vibrant topic forums, real-time chats, and engaging communities across tech, hobbies, and ideas.
          </p>
          <a
            href="/"
            className="inline-block bg-yellow-400 text-green-950 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20 px-6 border-t bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-300">
            Key Features
          </h2>
          <div className="flex space-x-6 overflow-x-auto px-2 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-900 pb-4">
            {[
              {
                title: "Forum-Based Discussions",
                desc: "Dive into topics like Python, JS, or your favorite games.",
              },
              {
                title: "Real-Time Messaging",
                desc: "Built for speed, engage instantly with community members.",
              },
              {
                title: "Custom Profiles",
                desc: "Show off your avatar, skills, and badges for contributions.",
              },
              {
                title: "Global Community",
                desc: "Meet like-minded people from all around the world.",
              },
              {
                title: "Search & Filters",
                desc: "Find exactly what you want—fast and simple.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[300px] bg-green-950 p-6 rounded-lg border border-green-700 shadow-md hover:shadow-lg hover:border-yellow-400 transition"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-50 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-50 border-t">
        © {new Date().getFullYear()} TopicHive — Connect. Chat. Grow.
      </footer>
    </div>
  );
}
  export const metadata = {
  title: 'Home - TopicHive',
  description: 'Connect to like minded people',
  }
