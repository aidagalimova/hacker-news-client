import { useParams } from 'react-router-dom';
import FullNews from 'features/fullNews';
import { PageContainer } from 'features/ui/styledComponents';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return null;
  }

  return (
    <PageContainer>
      <FullNews id={id} />
    </PageContainer>
  );
};

export default NewsPage;
