import React, { useState } from 'react';

export default function Thanks() {
  
  return (
    <div className="container">
        <div className="row">
            <div className="card px-0 mx-auto my-5" style={{width: '400px'}}>
                <div className="card-header" style={{ textAlign: 'center' }}>
                    <h3>Thank you!</h3>
                    <h4>your response was saved.</h4>
                </div>
            </div>
        </div>
    </div>
  );
};