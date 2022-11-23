const hero = require("../EVA06757.jpg");

function BioText() {
  const componentStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${hero})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50vh",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    margin: "20px",
  };
  const headerStyle = {
    display: "flex",
    color: "#ffff",
    gap: "50px 50px",
    flexWrap: "wrap",
    margin: "10px",
  };

  const contentStyle = {
    color: "#ffff",
    padding: "50px",
    margin: "10px",
  };

  return (
    <section className="bg-dark">
      <div style={componentStyle}>
        <div style={headerStyle}>
          <div>
            <h1>Anthony Sims</h1>
            <h2>Minneapolis, MN</h2>
          </div>
        </div>
        <p style={contentStyle}>
          Whether it was my time in supply chain, role in merchandising, or my
          time as a music student at Millikin University, I often found myself
          engaged with my colleagues in conversations surrounding the tools we
          had to accomplish our jobs. "Why doesn't this accept this input", or
          "I wish this did this" were in regular lunchtime converation
          rotations. Why complain about a problem you already have the means to
          solve. After meeting and learning from engineers at I discovered I
          would much rather be associated with solutions.
        </p>
      </div>
    </section>
  );
}
export default BioText;
