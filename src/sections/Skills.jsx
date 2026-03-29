// Skills.jsx
import useInView from "../hooks/useInView";
import skills from "../data/skills";
import SectionTitle from "../components/ui/SectionTitle";

function CarouselRow({ group, index }) {
  const [ref, inView] = useInView();
  const dir = index % 2 === 0 ? "ltr" : "rtl";
  const doubled = [...group.items, ...group.items];

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `slideInLeft 0.6s ease-out forwards`
          : "none",
        animationDelay: inView ? `${index * 0.15}s` : "0s",
      }}
    >
      <p className="text-xs font-medium text-text-secondary uppercase tracking-widest mb-2 px-1">
        {group.category}
      </p>

      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
        }}
      >
        <div
          className={`flex gap-3 w-max ${dir === "ltr" ? "animate-scroll-ltr" : "animate-scroll-rtl"}`}
        >
          {doubled.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-bg-surface border border-accent rounded-lg text-sm text-text-secondary whitespace-nowrap transition-colors duration-200 cursor-default"
            >
              {skill.icon && (
                // <i className={`${skill.icon} colored`} style={{ fontSize: "18px" }} />
                 <i className={`${skill.icon} text-accent`} style={{ fontSize: "18px" }} />
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto text-gray-300 px-6">
      <SectionTitle><span className="text-accent">H</span>abilidades</SectionTitle>
      <div className="flex flex-col gap-8">
        {skills.map((group, index) => (
          <CarouselRow key={group.category} group={group} index={index} />
        ))}
      </div>
    </div>
  );
}