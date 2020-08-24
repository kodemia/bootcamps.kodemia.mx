import { Children } from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-title">
				<h1>{props.title}</h1>
			</div>
			<div className='card-content'>
        {props.children}
			</div>
    </div>
  );
}
