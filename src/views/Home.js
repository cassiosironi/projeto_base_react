function Home() {
  return (
    <div className="container-fluid px-0">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../images/banner1.jpg")}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/banner2.jpg")}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/banner3.jpg")}
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
