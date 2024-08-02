import { useParams } from 'react-router-dom';
import FullNews from 'features/fullNews';
import { ContentLayout, PageContainer } from 'shared/styledComponents';
import NotFoundPage from 'pages/NotFoundPage';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || isNaN(+id)) {
    return <NotFoundPage />;
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
