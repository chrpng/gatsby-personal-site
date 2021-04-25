import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../../lettering/lettering";
import Content from "../../content/content";
import Section from "../../section/section";
import "../fullpage.css";

const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <div className="lettering">
						<p style={{ color: "#de5375" }}>Hi! My name is</p>
						<h1>Chris Png</h1>
						<h1>
							I build things for the web.
            </h1>
            <p>
							Front-End Web Developer
						</p>
					</div>
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/projects");
              }}
            >
              See more
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export default Home