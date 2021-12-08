import React from 'react';

export default function FlagCard({ name, iso2, continent }) {
  return (
    <div className="flags">
      <h3> {name} </h3>
      <h2> {continent} </h2>
      <img alt={name} src={`http://flagcdn.com/16x12/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
