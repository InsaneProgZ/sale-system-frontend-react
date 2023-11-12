import "./Content.css";

export default function Content({selected}:{selected:string}) {
  return (
    <div className="content">
        {selected}
    </div>
  );
}
