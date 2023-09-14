const Table = ({ api, update, deleted }) => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="w-50 p-3">Tarefa</th>
                        <th className="w-50 p-3">Status</th>
                        <th className="w-50 p-3">Data</th>
                        <th className="w-50 p-3">Deletar</th>
                        <th className="w-50 p-3" >Alterar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        api.map((obj, index) => (
                            <tr key={index}>
                                <td>{obj.name}</td>
                                <td>{obj.status}</td>
                                <td>{obj.date}</td>
                                <td><i className="bi bi-trash" onClick={() => deleted(obj.id)}></i></td>
                                <td><i className="bi bi-pencil-square" onClick={() => update(obj.id)}></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;