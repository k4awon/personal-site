import React from "react";
import * as data from '../data/artProject.json';

let artData = data;
const ArtProject = () => {
    return(
        <div id="artProjects">
                {artData.projects.map(project =>(
                    <div className="text-center">
                        <div className="projectContainer">
                            <img src={project.link} />
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default ArtProject;