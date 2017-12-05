import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import Slider from "material-ui/Slider";
import ProjectCards from "../ProjectCards/ProjectCards";

import { aboutMe } from '../../data';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

function handleActive(tab) {
  alert(
    `A tab with this route property ${tab.props["data-route"]} was activated.`
  );
}

const PortfolioTabs = () => (
  <Tabs>
    <Tab label="Welcome">
      <div>
        <h2 style={styles.headline}>Welcome</h2>
        <p>Welcome to my page!</p>
      </div>
    </Tab>
    <Tab label="About Me">
      <div>
        <h2 style={styles.headline}>About Me</h2>
        <p>
          {aboutMe}
        </p>
      </div>
    </Tab>
    <Tab label="Projects">
      <div>
        <h2 style={styles.headline}>Projects</h2>
        <ProjectCards />
      </div>
    </Tab>
  </Tabs>
);

export default PortfolioTabs;
