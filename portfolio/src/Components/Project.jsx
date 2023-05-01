import Cards from "./Cards";
const gameLibraryImage = "https://picsum.photos/seed/picsum/200/200";
const creditCreditImage = "https://picsum.photos/seed/picsum/200/200";
const revelryImage = "https://picsum.photos/seed/picsum/200/200";

export default function Projects() {
  const backButton = document.querySelector(".back-button");
  const forwardButton = document.querySelector(".forward-button");

  const backClick = () => {
    const slides = backButton
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const currentSlide = slides.querySelector("[data-active]");
    const newIndex = [...slides.children].indexOf(currentSlide) - 1;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }

    slides.children[newIndex].dataset.active = true;
    delete currentSlide.dataset.active;
  };

  const forwardClick = () => {
    const slides = forwardButton
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const currentSlide = slides.querySelector("[data-active]");
    const newIndex = [...slides.children].indexOf(currentSlide) + 1;

    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete currentSlide.dataset.active;
  };
  return (
    <div className="project-container" id="projects">
      <div className="project-text-container">
        <h1>Cool Stuff</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo
          esse blanditiis ipsa neque quia tempore, ducimus excepturi ipsam
          repellat error temporibus, earum aspernatur nihil similique quam nemo
          aliquid dignissimos!
        </p>
      </div>
      <div className="cards" data-carousel>
        <button onClick={backClick} className="back-button">
          &#8592;
        </button>
        <ul data-slides>
          <li className="slide" data-active>
            {" "}
            <Cards
              appName="Game Library"
              tech="Javascript"
              appImg={gameLibraryImage}
              imgAlt="Artistic Bill Murray"
            />
          </li>
          <li className="slide">
            {" "}
            <Cards
              appName="Credit Credit"
              tech="Python, SQL"
              appImg={creditCreditImage}
              imgAlt="Nick Cage"
            />
          </li>

          <li className="slide">
            {" "}
            <Cards
              appName="Revelry"
              tech="Some C lnaguage"
              appImg={revelryImage}
              imgAlt="stephen segal"
            />
          </li>
        </ul>
        <button onClick={forwardClick} className="forward-button">
          &rarr;
        </button>
      </div>
    </div>
  );
}
