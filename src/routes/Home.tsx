import { useAuth0Client } from '@common/hooks';
import { Layout } from '@common/ui';
import { DashboardContainer } from '@features/dashboard';

export const Home = () => {
  const { isAuthenticated, authenticatedUser } = useAuth0Client();

  return (
    <Layout>
      {isAuthenticated && authenticatedUser?.name}
      <DashboardContainer />
    </Layout>
  );
};
