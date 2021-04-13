import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../../lettering/lettering";
import Background from "../../background/background";
import Content from "../../content/content";
import Mouse from "../../mouse/mouse";
import Section from "../../section/section";
import Page from "../../page/page";
import "../fullpage.css";

const Projects = withNavigationContext(({ fullpage }) => {
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
				<Lettering
					title="PAGE-SECTION"
					text={["This is a continued page section."]}
				/>
			</Section>
		</Page>
  );
});

export default Projects