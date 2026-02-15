import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 px-4 sm:px-6 bg-linear-to-b from-transparent to-blue-50/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mt-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm Muhammad Rifky R, a passionate Fresh Graduate venturing into
              the world of web development. With a solid foundation in
              JavaScript, React, and Next.js, I'm ready to create innovative and
              user-friendly digital solutions.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              As a recent graduate, I have a high enthusiasm for learning and
              growing in the technology industry. I believe every project is an
              opportunity to improve my skills and understand best practices in
              software development. My commitment is to deliver clean,
              maintainable, and industry-standard code.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Beyond coding, I actively keep up with the latest technology
              trends, contribute to the developer community, and continuously
              strive to become a better developer every single day.
            </p>

            <button className="btn-primary mt-6">Download CV</button>
          </div>

          <div className="rounded-2xl aspect-square overflow-hidden shadow-lg">
            <Image
              src="/profile.jpeg"
              alt="Muhammad Rifky R"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
