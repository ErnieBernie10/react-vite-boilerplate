import { sleep } from '@common/util/sleep';
import { useQuery } from 'react-query';

export const useGetHello = () =>
  useQuery(['getHello'], () => sleep(Promise.resolve('Hello world'), 1000));
