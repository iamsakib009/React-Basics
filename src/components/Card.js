import React from "react";

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
}) {
  return (
    <div className="card">
      <div className="card--badge">SOLD OUT</div>
      <img src={img} alt="lala" />
      <div className="card--stats">
        <img src="/images/star.png" alt="kakak" className="card--star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
