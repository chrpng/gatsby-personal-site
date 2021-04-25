import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../../lettering/lettering";
import Content from "../../content/content";
import Mouse from "../../mouse/mouse";
import Section from "../../section/section";
import Page from "../../page/page";
import "../fullpage.css";

import { Projects }  from '../../landing'

const ProjectsPage = withNavigationContext(({ fullpage }) => {
  return (
    <Page>
			<Section wrapper={false} backgroundColor="#4158b4">
				<Content
					main={
						<Lettering
							title="PAGE-TWO"
							text={[
								"This is multiple section page, scroll down to view more content."
							]}
						/>
					}
					action={<Mouse />}
				/>
			</Section>
			<Section backgroundColor="#617be3">
				<Projects />
			</Section>
		</Page>
  );
});

export default ProjectsPage