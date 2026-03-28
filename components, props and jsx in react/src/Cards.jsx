import "./Cards.css";
export default function Cards(props) {
  return (
    <>
      <div className="cards">
        <img
          src="https://i.pinimg.com/1200x/59/2b/fb/592bfb2ec02f3aba1ac9a324e992ecae.jpg"
          alt=""
        />
        <h2>{props.heading}</h2>
        <p>{props.des}</p>
      </div>
    </>
  );
}
