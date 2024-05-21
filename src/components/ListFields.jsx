import React, { useEffect, useState } from "react"
import { listFields } from "../services/FieldService"
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import { createField , updateField, deleteField } from "../services/FieldService"
import { useNavigate } from "react-router-dom"

export default function ListFields() {
    
    const [fields, setFields] = useState([])
    const [openState, setOpenState] = useState(false)
    const [openState1, setOpenState1] = useState(false)

    const [selectedFieldId, setSelectedFieldId] = useState("");
    const [label, setLabel] = useState('')
    const [type, setType] = useState('Combobox')
    const [required, setRequired] = useState('')
    const [active, setActive] = useState('')

    const [labelError, setLabelError] = useState('');

    const navigator = useNavigate();

    function saveField(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const field = {label, type, required, active}
        console.log(field)

        createField(field).then((response) => {
            console.log(response.data);
            setLabel('')
            setType('Combobox')
            setRequired('')
            setActive('')
            setOpenState1(false);
            window.location.reload();
        }) 
    }

    function updateFieldFunction(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const field = {label, type, required, active}
        console.log(field)

        updateField(field, selectedFieldId).then((response) => {
            console.log(selectedFieldId);
            console.log(response.data);
            setLabel('')
            setType('Combobox')
            setRequired('')
            setActive('')
            setOpenState(false);
            window.location.reload();
        }) 
    }

    function deleteFieldFuntion(fieldId) {
        
        console.log(fieldId)
        deleteField(fieldId).then((response) => {
            console.log(response.data);
            window.location.reload();
        })
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

    const functionPopOpen = (fieldId) => {
        setSelectedFieldId(fieldId);
        console.log(fieldId);
        setOpenState(true);
    }

    const functionPopClose = () => {
        setOpenState(false);
    };

    const functionPopOpen1 = () => {
        setOpenState1(true);
    }

    const functionPopClose1 = () => {
        setOpenState1(false);
        
    };

    useEffect(() => {
        listFields().then((response) => {
            setFields(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div className="card px-5 w-75 mx-auto my-5">
            <div className="container d-flex justify-content-between">
                <h2 className="row row-cols-1 row-cols-lg-3 align-items-stretch g-2 py-3">Fields</h2>
                <button className="btn btn-primary align-self-center" onClick={functionPopOpen1}>ADD FIELD</button>
                <Dialog open={openState1} onClose={functionPopClose1} fullWidth maxWidth="sm" className="custom-dialog">
                    <DialogTitle>Add Field</DialogTitle>
                    <DialogContent>
                        <form>
                            <div className="form-group mb-2">
                                <TextField
                                    label="Label"
                                    value={label}
                                    onChange={(e) => setLabel(e.target.value)}
                                    variant="outlined"
                                    className="form-control"
                                    error={!!labelError}
                                    helperText={labelError}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <Select
                                    label="Type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    fullWidth
                                    variant="outlined"
                                >
                                    <MenuItem value="Combobox">Combobox</MenuItem>
                                    <MenuItem value="Radiobutton">Radiobutton</MenuItem>
                                    <MenuItem value="Textline">Textline</MenuItem>
                                </Select>
                                </div>
                                <div className="form-group mb-2" style={{ display: 'flex' }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={required}
                                                onChange={(e) => setRequired(e.target.checked)}
                                            />
                                            }
                                        label="Required"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={active}
                                                onChange={(e) => setActive(e.target.checked)}
                                            />
                                            }
                                        label="Is Active"
                                        style={{ marginLeft: '15px' }}
                                    />
                                </div>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={functionPopClose1}>Cancel</Button>
                        <Button onClick={saveField} variant="contained" color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <table className="table  table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th className= "col-lg-4" scope="col">Label</th>
                        <th className= "col-lg-4" scope="col">Type</th>
                        <th className= "col-lg-2" scope="col">Required</th>
                        <th className= "col-lg-2" scope="col">Is Active</th>
                        <th className= "col-lg-1" scope="col"></th>
                        <th className= "col-lg-1" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fields.map(field =>
                            <tr key={field.label} >
                                <td>{field.label}</td>
                                <td>{field.type}</td>
                                <td>{field.required ? "True" : "False"}</td>
                                <td>{field.active ? "True" : "False"}</td>
                                <td className="pl-0">
                                    <a class="nav-link py-2 px-0 px-lg-2" target="_blank" onClick={() => functionPopOpen(field.id)} rel="noopener" className="d-flex justify-content-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg> 
                                    </a>
                                    <Dialog open={openState} onClose={functionPopClose} fullWidth maxWidth="sm" className="custom-dialog">
                                        <DialogTitle>Edit Field</DialogTitle>
                                        <DialogContent>
                                            <form>
                                                <div className="form-group mb-2">
                                                    <TextField
                                                        label="Label"
                                                        value={label}
                                                        onChange={(e) => setLabel(e.target.value)}
                                                        variant="outlined"
                                                        className="form-control"
                                                        error={!!labelError}
                                                        helperText={labelError}
                                                    />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <Select
                                                        label="Type"
                                                        value={type}
                                                        onChange={(e) => setType(e.target.value)}
                                                        fullWidth
                                                        variant="outlined"
                                                    >
                                                        <MenuItem value="Combobox">Combobox</MenuItem>
                                                        <MenuItem value="Radiobutton">Radiobutton</MenuItem>
                                                        <MenuItem value="Textline">Textline</MenuItem>
                                                    </Select>
                                                </div>

                                                <div className="form-group mb-2" style={{ display: 'flex' }}>
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        checked={required}
                                                        onChange={(e) => setRequired(e.target.checked)}
                                                        />
                                                    }
                                                    label="Required"
                                                    />

                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        checked={active}
                                                        onChange={(e) => setActive(e.target.checked)}
                                                        />
                                                    }
                                                    label="Is Active"
                                                    style={{ marginLeft: '15px' }}
                                                    />
                                                </div>
                                            </form>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={functionPopClose}>Cancel</Button>
                                            <Button onClick={updateFieldFunction} variant="contained" color="primary">
                                                Save
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </td>
                                <td className="pl-0">
                                    <a class="nav-link py-2 px-0 px-lg-2" onClick={() => deleteFieldFuntion(field.id)} target="_blank" rel="noopener" className="d-flex justify-content-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                    </svg>                                        
                                    </a>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}