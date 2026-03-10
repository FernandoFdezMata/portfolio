import skills from "../data/skills"

function Skills() {

  return (
    <div className="max-w-6xl mx-auto text-gray-300">

      <h2 className="text-3xl font-bold mb-8">
        Habilidades
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {skills.map(group => (
          <div key={group.category}>

            <h3 className="text-xl font-semibold mb-3">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">

              {group.items.map(skill => (
                <span
                  key={skill}
                  className="border px-3 py-1 rounded"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Skills