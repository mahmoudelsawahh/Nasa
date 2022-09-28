import {  Annotation, Loading, Template } from './index';
import { useLoading } from './lib/loading';

function Main() {
  const loading = useLoading();

  return (
    <>
      <Loading visible={loading.loading} />
      <Template />
      {!loading.loading && <Annotation />}
    </>
  );
}

export default Main;
