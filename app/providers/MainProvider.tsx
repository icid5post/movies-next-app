import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@/components/layouts/Layout'
import ReduxToastr from "react-redux-toastr";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import HeadProvider from "./HeadProvider";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: React.FC<{ children: React.ReactElement }> = ({
	children,
}) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToastr/>
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
