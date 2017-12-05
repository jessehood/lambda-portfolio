import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import { projects } from '../../data';

class ProjectCards extends Component {
  render() {
    return (
      <div>
        {projects.map((project, index) => {
          return (
            <Card key={index}>
              <CardHeader
                title={project.title}
                subtitle={project.subtitle}
                avatar={project.avatar}
              />
              {/* <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
              <img src="images/nature-600-337.jpg" alt="" />
               </CardMedia> */}
              <CardTitle title={project.title} subtitle={project.subtitle} />
              <CardText>{project.cardText}</CardText>
              <CardActions>
                <FlatButton label="Go to project" />
                <FlatButton label="View source" />
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}
export default ProjectCards;
