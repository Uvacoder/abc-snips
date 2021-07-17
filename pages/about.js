import HomeLink from "components/home-link";

const About = () => {
  return (
    <>
      <r-grid columns="3">
        <r-cell />
        <r-cell>
          <HomeLink />
          <h2>About Snips</h2>
          <p>
            Snips is just a collection of snippets that I recreate in every
            project and while I can go to any of those repositories to copy the
            code, I just think a collection of all the useful components I make
            that's easier to access while not being installable packages makes
            it easy to customize and faster than waiting for the dependencies to
            install.
          </p>
        </r-cell>
        <r-cell />
      </r-grid>
    </>
  );
};

export default About;
