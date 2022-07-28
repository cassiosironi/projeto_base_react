function Sobre() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 py-4">
          <img
            src={require("../images/banner2.jpg")}
            className="d-block w-100"
            alt=""
          />
        </div>
        <div className="col-12 py-4">
          <h1>
            Example heading <span class="badge bg-secondary">REACT</span>
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            interdum turpis nisi, ut porttitor velit convallis id. Integer dui
            tortor, euismod sit amet viverra a, vehicula et urna. Nunc commodo
            nunc diam, at auctor massa posuere sed. Phasellus varius hendrerit
            lacus, nec tincidunt mauris pulvinar quis. Etiam augue eros,
            sollicitudin in dui id, semper rutrum odio. Pellentesque cursus
            maximus lectus nec vestibulum. Vivamus non commodo sem.
            <br />
            Vestibulum a nisl mauris. Suspendisse quis nisi id neque vulputate
            luctus. Vestibulum sit amet ante quis lectus eleifend sollicitudin
            non quis ipsum. Maecenas sapien mauris, tempor eu nunc luctus,
            euismod porta nulla. Fusce id laoreet turpis. Integer imperdiet
            tortor eu leo maximus, vel rutrum elit ultrices. Etiam ornare
            maximus bibendum. Suspendisse mi eros, maximus ac odio sed, commodo
            laoreet leo. Proin facilisis turpis tortor, id volutpat dui sodales
            rutrum. Donec finibus auctor leo. Phasellus non turpis eu tortor
            feugiat lacinia. Ut id nisl at arcu laoreet vestibulum gravida nec
            est.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
