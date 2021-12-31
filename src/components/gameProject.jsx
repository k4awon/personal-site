import React from "react";
import * as data from '../data/gameProject.json';

let contactMe = data;
const GameProject = () => {
    return(
        <div id="gameProjects">
                {gameData.projects.map(project =>(
                    <div className="text-center">
                        <div className="projectContainer">
                            <div>
                                {project.name}
                            </div>
                            <a href={project.link}>
                                {project.link}
                            </a>
                            <div className="">
                                {project.description}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default GameProject;