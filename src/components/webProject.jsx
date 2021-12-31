import React from "react";
import * as data from '../data/webProject.json';

let projectData = data;
const WebProject = () => {
    return(
        <div id="webProjects">
                {projectData.projects.map(project =>(
                  <div className="text-center">
                      <div className="projectContainer">
                          <div>
                              {project.name}
                          </div>
                          <div>
                              {project.description}
                          </div>
                      </div>
                  </div>
                ))}
        </div>
    )
}

export default WebProject;