
export default function Menu(props) {
    const items = props.list.map((obj, index) => 
    <div key={index}>
    <button className="menu-button" onClick={obj.action()}>
        <p>{obj.name}</p>
    </button>
    </div>
);

    return (<>
    {items}
    </>);
}