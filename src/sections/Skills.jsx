import useInView from "../hooks/useInView";
import skills from "../data/skills"
import SectionTitle from "../components/ui/SectionTitle"
import Card from "../components/ui/Card"

function SkillCard({ group, index }) {
  const [ref, inView] = useInView();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `${isLeft ? "slideInLeft" : "slideInRight"} 0.6s ease-out forwards`
          : "none",
        animationDelay: inView ? `${index * 0.1}s` : "0s",
      }}
    >
      <Card glowColor={group.glow}>
        <h3 className="text-xl font-semibold mb-3 text-text-primary">
          {group.category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {group.items.map(skill => (
            <span
              key={skill}
              className="bg-bg-elevated border border-bg-elevated hover:border-accent text-text-secondary text-sm px-3 py-1 rounded transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto text-gray-300">
      <SectionTitle><span className="text-accent">H</span>abilidades</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group, index) => (
          <SkillCard key={group.category} group={group} index={index} />
        ))}
      </div>
    </div>
  );
}