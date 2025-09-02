export default function layout(props) {
  return (
    <form>
      <h2>Create</h2>
      {props.children}
    </form>
  );
}

// props.children => 중첩된 컴포넌트
// 중첩된 컴포넌트 => create/page.js, create/layout.js
// create/page.js => props.children
// create/layout.js => <form> {props.children} </form>

// 중첩된 컴포넌트가 없으면 undefined
// undefined => 아무것도 안보임
// null => 아무것도 안보임
// false => 아무것도 안보임
// '' => 공백 => 공백 보임
