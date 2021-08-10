function TabItem(props) {
  return (
    <div>
      {props.listMenuItems.map((listItem, index) => (
        <a key={index} className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          {listItem}
        </a>
      ))}
    </div>
  );
}

export default TabItem;
