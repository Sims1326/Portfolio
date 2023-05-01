function Cards({ appName, tech, appImg, imgAlt }) {
  return (
    <a className="card" href="/">
      <img className="card-img" src={appImg} alt={imgAlt} />
      <div>
        <h1>{appName}</h1>
        <h2>{tech}</h2>
      </div>
    </a>
  );
}

export default Cards;
