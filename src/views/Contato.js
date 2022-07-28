function Contato() {
  return (
    <div className="container my-5">
      <form class="py-md-5">
      <div className="mb-3">         
          <input type="text" className="form-control" placeholder="Nome" />
        </div>
        <div className="mb-3">         
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="phone" className="form-control" placeholder="Telefone" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Cidade" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Assunto" />
        </div>
        <div className="mb-3">
          <textarea type="text" className="form-control" rows="4" placeholder="Mensagem"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contato;
