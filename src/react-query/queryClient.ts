import { QueryClient } from "react-query";

function queryErrorHandler(error: unknown): void {
  const title =
    error instanceof Error
      ? error.toString().replace(/^Error:\s*/, "")
      : "error connecting to server";
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});

export { queryClient };
