export default function Read(props) {
  return (
    <>
      <h2>Read</h2>
      parameter is {props.params.id}
    </>
  );
}

// 폴더명으로 동적인 라우팅 처리 => /read/1, /read/2, /read/abc
// 파일명은 [id].js, [id]는 변수명

// props.params.id => 1, 2, abc
// next.js 13버전부터는 props로 받아옴

// next.js 12버전까지는 useRouter() 훅을 사용해서 받아옴
// import { useRouter } from 'next/router';
// const router = useRouter();
// const { id } = router.query;
