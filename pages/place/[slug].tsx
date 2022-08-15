import React from 'react';
import Layout from '../../app/components/common/Layout';
import { useRouter } from 'next/router';

const Place = () => {
  const router = useRouter();
  //Place kyoto http://localhost:3000/place/kyoto
  return <Layout>Place {router.query.slug}</Layout>;
};

export default Place;
