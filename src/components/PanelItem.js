function PanelItem(props) {
  //Check the children object
  //const data = props.children._owner.memoizedProps;

  return (
    <article className="panel is-primary">
      <p className="panel-heading"></p>
      {props.children}
    </article>
  );
}

export default PanelItem;
