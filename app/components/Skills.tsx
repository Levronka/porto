export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML/CSS",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "REST APIs",
      ],
    },
    {
      name: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "VS Code", "API Integration"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-20 px-4 sm:px-6 bg-linear-to-b from-blue-50/50 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {category.name}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-linear-to-r from-sky-400 to-blue-600 rounded-full"></div>
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
