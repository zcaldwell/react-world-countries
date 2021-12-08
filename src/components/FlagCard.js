import React from 'react';

export default function FlagCard({ name, iso2, continent }) {
  return (
    <div className="flags">
      <h2> {name} </h2>
      <h3> {continent} </h3>
      <img alt={name} src={`http://flagcdn.com/16x12/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
