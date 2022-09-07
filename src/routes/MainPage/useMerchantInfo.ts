import { useQuery } from 'react-query';
import { useToast } from '@chakra-ui/react';

import { getMerchantInfoApi } from '../../service';
import { Item, MerchantInfo } from '../../types/index.d';

interface UseMerchantInfoReturn {
  isLoading: boolean;
  merchantData: MerchantInfo;
}

export const useMerchantInfo = (): UseMerchantInfoReturn => {
  const toast = useToast();

  const { isLoading, data } = useQuery(['getMerchantInfoApi'], () => getMerchantInfoApi(), {
    onError(err) {
      toast({
        position: 'top',
        title: `${err}`,
        status: 'warning',
        duration: 1500,
        variant: 'top-accent',
        colorScheme: 'gray',
      });
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
