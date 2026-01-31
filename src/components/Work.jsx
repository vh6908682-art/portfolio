const experiences = [
  {
    company: "Olbap Design",
    role: "Web Designer",
    period: "March 2024 - December 2025",
    description: [
      "I worked as a Web Designer within a company, responsible for designing and improving corporate websites and service landing pages with a strong focus on UI/UX.",
      "I collaborated closely with product managers and developers to ensure design consistency from concept to implementation. By incorporating user feedback and data-driven insights, I continuously refined designs to enhance usability and conversion rates.",
      "I delivered responsive, brand-aligned web designs optimized for multiple devices and browsers.",
    ],
  },
  {
    company: "Agencia Pópuli",
    role: "Part time Web Designer",
    period: "April 2022 - January 2023",
    description: [
      "I worked as a part-time Junior Developer, supporting the development and maintenance of web applications. I assisted in implementing features, fixing bugs, and improving code quality under the guidance of senior developers.",
      "Through hands-on collaboration and real-world tasks, I strengthened my understanding of development workflows and best practices.",
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="px-4 py-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold mb-8">Employment history</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-start md:justify-between"
            >
              <div className="min-w-0 flex-1">
                <h3 className="font-medium">{exp.role}</h3>
                <p className="text-sm text-white/70">{exp.company}</p>
                <div className="mt-2 space-y-2 text-sm text-white/80">
                  {exp.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="text-xs text-white/60 shrink-0 md:text-right">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
