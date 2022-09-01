import { useQuery } from 'react-query';

import { getMerchantInfoApi } from '../../service';
import { Item, MerchantInfo } from '../../types/index.d';

interface UseMerchantInfoReturn {
  isLoading: boolean;
  merchantData: MerchantInfo;
}

export const useMerchantInfo = (): UseMerchantInfoReturn => {
  const { isLoading, data } = useQuery(['getMerchantInfoApi'], () => getMerchantInfoApi(), {
    onError(err) {
      // 에러 모달로 보여주기
      console.log({ err });
    },
  });

  const formattedItems = data?.items.reduce((acc: Record<string, Item[]>, curr: Item) => {
    if (!acc[curr.categoryName]) {
      acc[curr.categoryName] = [];
    }
    acc[curr.categoryName].push(curr);

    return acc;
  }, {});

  return {
    isLoading,
    merchantData: {
      discounts: data?.discounts,
      merchantName: data?.merchantName,
      minimumOrderPrice: data?.minimumOrderPrice,
      items: formattedItems,
    },
  };
};
