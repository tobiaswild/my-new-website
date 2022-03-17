import Card, { CardGrid } from "ui/Card";

export default function posts({ projects }) {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <CardGrid>
        {projects &&
          projects.map((project, index) => (
            <Card
              key={index}
              imageUrl={project.openGraphImageUrl}
              title={project.name}
              preview={project.description}
              link={project.url}
              type="project"
            />
          ))}
      </CardGrid>
    </section>
  );
}
