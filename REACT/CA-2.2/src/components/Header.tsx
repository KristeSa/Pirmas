export const Header = (props: any) => {
  return (
    <>
      {props.children}
      <div className="header-img">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </>
  );
};
