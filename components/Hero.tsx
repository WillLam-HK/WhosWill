const skills = ['Swift', 'Kotlin', 'React Native', 'AI-assisted coding']

export default function Hero() {
  return (
    <section className="border-b border-neutral-200 pb-14 pt-10" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
        Will
      </h1>
      <p className="text-base text-neutral-600 mb-6 max-w-xl leading-relaxed">
        Mobile app developer — I build iOS, Android, and cross-platform apps. I ship products quickly with a modern stack.
      </p>
      <div className="flex flex-wrap gap-2" aria-label="Skills">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm text-neutral-600"
          >
            {skill}
            <span className="text-neutral-300 ml-2" aria-hidden>·</span>
          </span>
        ))}
      </div>
    </section>
  )
}
