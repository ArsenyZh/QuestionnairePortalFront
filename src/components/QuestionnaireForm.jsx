import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listFields } from "../services/FieldService";
import { createResponse } from '../services/ResponsesServise';

export default function QuestionnaireForm() {
  const navigate = useNavigate();

  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    listFields().then((response) => {
      setFields(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Submit();
  };

  const Submit = () => {
    const answerList = Object.entries(formData).map(([label, value]) => {
      const field = fields.find(f => f.label === label);
      return {
        answer: value,
        fieldId: field.id,
        responseId: 0 
      };
    });
    const responseDto = { answerList };
    createResponse(responseDto)
      .then((response) => {
        console.log("Response created:", response.data);
        navigate('/domainname.com/questionnaires/successes');
      })
      .catch((error) => {
        console.error("Error creating response:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card px-0 mx-auto my-5" style={{ width: '400px' }}>
          <div className="card-header">
            <h3>Questionnaire</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div className="form-group mb-2" key={field.id}>
                  <label className="form-label">{field.label}</label>
                  {field.type === 'Combobox' ? (
                    <select
                      name={field.label}
                      value={formData[field.label] || ''}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="">Select an option</option>
                      {field.options.map((option, index) => (
                        <option key={index} value={option.value}>{option.option}</option>
                      ))}
                    </select>
                  ) : field.type === 'Radiobutton' ? (
                    <div className="form-group mb-2">
                      {field.options.map((option, index) => (
                        <div key={index} className="form-check">
                          <input
                            type="radio"
                            name={field.label}
                            value={option.option}
                            onChange={handleInputChange}
                            className="form-check-input"
                          />
                          <label className="form-check-label">{option.option}</label>
                        </div>
                      ))}
                    </div>
                  ) : (field.type === 'Textline' && (
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        name={field.label}
                        value={formData[field.label] || ''}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder={field.label}
                      />
                    </div>
                  ))}
                </div>
              ))}
              <div className="form-group mb-2">
                <button className="btn btn-primary align-self-center" type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}