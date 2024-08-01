import { useParams } from 'react-router-dom';
import FullNews from 'features/fullNews';
import { ContentLayout, PageContainer } from 'shared/styledComponents';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return null;
  }

  return (
    <ContentLayout>
      <PageContainer>
        <FullNews id={id} />
      </PageContainer>
    </ContentLayout>
  );
};

export default NewsPage;
