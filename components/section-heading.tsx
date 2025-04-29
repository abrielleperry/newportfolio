interface SectionHeadingProps {
  title: string
  subtitle: string
  alignment?: "left" | "center"
}

export default function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  return (
    <div className={`space-y-2 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  )
}
