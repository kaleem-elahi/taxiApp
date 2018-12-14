import React from "react";
import {
  Action, Scenes
} from "react-native-router-flux";
import HomeContainer from './Home/containers/HomeContainer';

const scenes = Action.create(
  <Scene key="root">
    <Scene key="home" component="HomeContainer" title="home" initial />
  </Scene>
)