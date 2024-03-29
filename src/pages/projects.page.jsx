import projectsData from '../data/projectLists.json';
import ProjectComponent from '../components/project/project.component';

const ProjectPage = () => {
  return (
    <div>
      <h1 className='text-center my-4'>Projects</h1>
      <div className='container'>
        <div className='row gap-3'>
          {projectsData &&
            projectsData.map((project) => (
              <ProjectComponent
                key={`${project?.id} + ${project?.title}`}
                project={project}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
