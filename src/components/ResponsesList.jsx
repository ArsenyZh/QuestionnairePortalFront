import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { listResponses } from "../services/ResponsesServise";
import { listFields } from "../services/FieldService";

export default function ResponsesList() {
  const [responses, setResponses] = useState({});
  const [fields, setFields] = useState([]);

  useEffect(() => {
    async function fetchResponses() {
      try {
        const response = await listResponses();
        const groupedResponses = response.data.answerList.reduce((acc, response) => {
          if (!acc[response.responseId]) {
            acc[response.responseId] = { [response.fieldId]: response.answer };
          } else {
            acc[response.responseId][response.fieldId] = response.answer;
          }
          return acc;
        }, {});
        setResponses(groupedResponses);
      } catch (error) {
        console.error(error);
      }
    }

    fetchResponses();
  }, []);

  useEffect(() => {
    async function fetchFields() {
      try {
        const response = await listFields();
        setFields(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFields();
  }, []);

  console.log(responses);

  return (
    <div className="card px-5 w-75 mx-auto my-5">
      <div className="container d-flex justify-content-between">
        <h2 className="row row-cols-1 row-cols-lg-3 align-items-stretch g-2 py-3">Responses</h2>
      </div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            {fields.map((field, index) => (
              <th key={index} className="col-lg-2" scope="col">{field.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(responses).map((responseId, index) => {
            const fieldIds = Object.keys(responses[responseId]);
            const fieldValues = fieldIds.map(fieldId => responses[responseId][fieldId]);

            return (
              <tr key={index}>
                {fields.map((field, columnIndex) => {
                  if (fieldIds.includes(field.id.toString())) {
                    const fieldIndex = fieldIds.indexOf(field.id.toString());
                    return (
                      <td key={columnIndex}>
                        {fieldValues[fieldIndex]}
                      </td>
                    );
                  }
                  return <td key={columnIndex}>N/A</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}