import React from 'react';
import Icon1 from '../images/hogar.png'
import Icon2 from '../images/fithub.png'
import Icon3 from '../images/jamPrints.png'
import Icon4 from '../images/netflix.png'

import {ProjectCont, ProjectsH1, ProjectsWrap, PCards, ProjectsPics, ProjectsH2, ProjectsP} from './ProjectsElements'

const Projects = () => {
  return (
      <>
    <ProjectCont id="project">
        <ProjectsH1>My Projects</ProjectsH1>
    <ProjectsWrap>
        <PCards>
            <ProjectsPics src={Icon1}/>
            <ProjectsH2> Hogar </ProjectsH2>
            <ProjectsP> First Group Project </ProjectsP>
        </PCards>
        <PCards>
            <ProjectsPics src={Icon2}/>
            <ProjectsH2> FitHub </ProjectsH2>
            <ProjectsP> Group Project </ProjectsP>
        </PCards>
        <PCards>
            <ProjectsPics src={Icon3}/>
            <ProjectsH2> Jam Prints </ProjectsH2>
            <ProjectsP> React Project </ProjectsP>
        </PCards>
        <PCards>
            <ProjectsPics src={Icon4}/>
            <ProjectsH2> Netflix Redesign </ProjectsH2>
            <ProjectsP> Group project </ProjectsP>
        </PCards>
    </ProjectsWrap>
    </ProjectCont>


    </>
  )
}

export default Projects