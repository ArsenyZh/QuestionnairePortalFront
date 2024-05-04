export default function LisrFields() {
    const data = [
        {
            "label": "combo field",
            "type": "Combox",
            "required": true,
            "active": false
          },
          {
            "label": "combo field",
            "type": "Radiobutton",
            "required": true,
            "active": true
          },
          {
            "label": "string",
            "type": "Combox",
            "required": true,
            "active": true
          }
    ]
    
    return (
        <div className="card px-5 w-75 mx-auto my-5">
            <h2 className="row row-cols-1 row-cols-lg-3 align-items-stretch g-2 py-3">Fields</h2>
            <table className="table  table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th className= "col-lg-2" scope="col">Label</th>
                        <th className= "col-lg-2" scope="col">Type</th>
                        <th className= "col-lg-1" scope="col">Required</th>
                        <th className= "col-lg-1" scope="col">Is Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(field =>
                            <tr key={field.label}>
                                <td>{field.label}</td>
                                <td>{field.type}</td>
                                <td>{field.required ? "True" : "False"}</td>
                                <td>{field.active ? "True" : "False"}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}