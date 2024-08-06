import AllNews from 'features/allNews';
import { ContentLayout, PageContainer } from 'shared/styledComponents';

const MainPage = () => {
  return (
    <ContentLayout>
      <PageContainer>
        <AllNews />
      </PageContainer>
    </ContentLayout>
  );
};

export default MainPage;
