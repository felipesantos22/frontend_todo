const Formulario = ({ setName, setStatus, create }) => {
    return (
        <>
            <h1>Lista de tarefas</h1>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Tarefa" className="form-control" />
                <input type="text" onChange={(e) => setStatus(e.target.value)} placeholder="Status" className="form-control" />
                <input type="button" value="Cadastrar" className="btn btn-primary" onClick={create} />
            </form>
        </>
    );
}

export default Formulario;