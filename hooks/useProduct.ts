import useSWR, { SWRConfiguration } from 'swr';
import { IProduct } from '../interfaces';

export const useProduct = (url: string, config: SWRConfiguration = {}) => {
	const { data, error } = useSWR<IProduct[]>(
		`https://adminrestwebserver.herokuapp.com/api${url}`,
		config
	);
	return {
		products: data || [],
		isLoading: !error && !data,
		isError: error
	};
};
