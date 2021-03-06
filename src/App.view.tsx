import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AppStyled, AppWrapper } from "./App.style";
import { AppTransitions } from "./App.transitions";
import { ChapterAbout } from "./Chapters/ChapterAbout/ChapterAbout.controller";
import { Chapter } from "./Chapter/Chapter.controller";
// import { ChapterVariables } from "./Chapters/ChapterVariables/ChapterVariables.controller";
import { Footer } from "./Footer/Footer.controller";
import { Header } from "./Header/Header.controller";
import { NotFound } from "./NotFound/NotFound.view";
import { GlobalStyle } from "./styles";

const App = () => {
  let previousLocation = window.location.pathname;
  return (
    <AppStyled>
      <GlobalStyle />
      <Router>
        <Header />
        <Route
          render={({ location }: any) => {
            const nextPage = parseInt(location.pathname.replace("/", ""));
            const previousPage = parseInt(previousLocation.replace("/", ""));
            previousLocation = location.pathname;
            return (
              <AppWrapper>
                <AppTransitions pageKey={location.key} reverse={previousPage > nextPage}>
                  <Switch location={location}>
                    <Route exact path="/" component={ChapterAbout} />
                    <Route exact path="/1" component={ChapterAbout} />
                    <Route exact path="/2" component={Chapter} />
                    <Route exact path="/3" component={Chapter} />
                    <Route exact path="/4" component={Chapter} />
                    <Route exact path="/5" component={Chapter} />
                    <Route exact path="/6" component={Chapter} />
                    <Route component={NotFound} />
                  </Switch>
                </AppTransitions>
              </AppWrapper>
            );
          }}
        />
        <Footer />
      </Router>
    </AppStyled>
  );
};

export default App;
