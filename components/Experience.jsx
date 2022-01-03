import classes from './experience.module.css';
import JobResponsibilities from './JobResponsibilities';
const Experience = () => {
  return (
    <div className={classes.main} id='exp'>
      <div className={classes.titleContainer}>
        <h2>
          <span className={classes.titleSpan}>02.</span> My Experience
        </h2>
      </div>
      <JobResponsibilities />
    </div>
  );
};

export default Experience;
