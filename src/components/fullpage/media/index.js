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

import Home from './Home'
import Projects from './Projects'
import Third from './Third'

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <Home />
  },
  {
    slug: "page-two",
    className: "sectioned page-two",
    children: <Projects />
  },
  {
    slug: "page-three",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide page-three",
    children: <Third />
  }
];
