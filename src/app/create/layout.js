export default function layout(props) {
  return (
    <form>
      <h2>Create</h2>
      {props.children}
    </form>
  );
}
