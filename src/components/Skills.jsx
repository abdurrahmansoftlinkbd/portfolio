import { Layers, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skills = {
    frontend: [
      { name: "HTML", progress: 90 },
      { name: "CSS", progress: 85 },
      { name: "JavaScript", progress: 80 },
      { name: "React", progress: 85 },
      { name: "Tailwind CSS", progress: 90 },
      { name: "DaisyUI", progress: 85 },
    ],
    backend: [
      { name: "Node.js", progress: 25 },
      { name: "Express.js", progress: 35 },
      { name: "MongoDB", progress: 40 },
      { name: "Firebase", progress: 80 },
    ],
    tools: [
      { name: "Git", progress: 85 },
      { name: "GitHub", progress: 85 },
    ],
  };

  const SkillCard = ({ title, skills, icon: Icon }) => (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h3 className="card-title flex items-center gap-2 mb-4">
          <Icon className="w-6 h-6" />
          {title}
        </h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.progress}%</span>
              </div>
              <div className="w-full bg-base-300 rounded-full h-2">
                <div
                  className="bg-default h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <div className="divider max-w-xs mx-auto"></div>
          <p className="text-base-content/80 max-w-2xl mx-auto">
            Here are the technologies and tools I work with. I’m constantly
            learning and improving my skills to stay up-to-date with the latest
            web development trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Frontend Development"
            skills={skills.frontend}
            icon={Layers}
          />
          <SkillCard
            title="Backend Development"
            skills={skills.backend}
            icon={Database}
          />
          <SkillCard
            title="Development Tools"
            skills={skills.tools}
            icon={Wrench}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
