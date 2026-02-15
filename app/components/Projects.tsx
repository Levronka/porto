export default function Projects() {
  const projects = [
    {
      title: "PT Tirta Merta Anugerah",
      description:
        "A full-stack e-commerce site built with Laravel and React integration for seamless online shopping.",
      tags: ["Laravel", "React", "Tailwind CSS"],
      link: "https://www.tirtamertaanugerah.com/en",
      image: "/project1.png",
    },
    {
      title: "Document Management System",
      description:
        "A comprehensive letter and document management system built with Laravel and React. Features include document tracking, digital workflow automation, and team collaboration capabilities.",
      tags: ["Laravel", "React", "Tailwind CSS"],
      link: "https://sisdeta.benlah.my.id/",
      image: "/project2.png",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : "_self"}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : ""}
              className="card card-hover"
            >
              <div className="bg-linear-to-br from-sky-100 to-blue-200 rounded-xl aspect-video mb-6 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl">📱</div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-sky-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-sky-500 font-semibold group-hover:translate-x-2 transition-transform">
                View Project →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
