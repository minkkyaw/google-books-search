import React from "react";

import './form.styles.scss'

// This file exports the Input, TextArea, and FormBtn components

export function Label(props) {
  return (
    <label {...props}>
      <div className="search-label-logo"></div>
    </label>
  );
}

export function Input(props) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}
