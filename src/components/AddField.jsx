import React,{ useState } from "react"
import { useNavigate } from 'react-router-dom'
import { createField } from "../services/FieldService"

export default function AddField() {

    const [label, setLabel] = useState('')
    const [type, setType] = useState('')
    const [required, setRequired] = useState('')
    const [active, setActive] = useState('')

    const [labelError, setLabelError] = useState('');

    const navigator = useNavigate();


    function saveField(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const field = {label, type : type ? "" : 'Combobox', required, active}
        console.log(field)

        createField(field).then((response) => {
            console.log(response.data);
            navigator('/fields')
        }) 
    }

    function cancelField(e) {
        navigator('/fields')
    }

    function validateForm() {
        let isValid = true;

        if (label.trim() === '') {
            setLabelError('Label is required');
            isValid = false;
        } else {
            setLabelError('');
        }

        return isValid;
      }

    return (
        <div className="container">
            <div className="row">
                <div className="card px-0 w-50 mx-auto my-5">
                    <div className="card-header">
                        <h3>Add field</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Label</label>
                                <input  type='text'
                                        name='label'
                                        value={label}
                                        className="form-control"
                                        onChange={(e) => {setLabel(e.target.value);}}>
                                </input>
                                {labelError && <div className="error">{labelError}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Type</label>
                                <select name='type'
                                        value={type}
                                        className="form-control"
                                        onChange={(e) => {setType(e.target.value);}}>
                                    <option value="Combobox">Combobox</option>
                                    <option value="Radiobutton">Radiobutton</option>
                                    <option value="Textline">Textline</option>
                                </select>
                            </div>

                            <div className="container d-flex">
                                <div className="form-check">
                                    <label className="form-label">Required</label>
                                    <input  className="form-check-input"
                                            type='checkbox'
                                            name='required'
                                            checked={required}
                                            onChange={(e) => {setRequired(e.target.checked);}}>
                                    </input>
                                </div>

                                <div className="form-check" style={{ marginLeft: '15px' }}>
                                    <label className="form-label">Is Active</label>
                                    <input  className="form-check-input"
                                            type='checkbox'
                                            name='active'
                                            checked={active}
                                            onChange={(e) => {setActive(e.target.checked);}}>
                                    </input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="container d-flex">
                            <button className="btn btn-primary align-self-center" style={{ marginRight: '15px' }} onClick={cancelField}>CANCEL</button>
                            <button className="btn btn-primary align-self-center" onClick={saveField}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}