export const generateUrl = (url: string, limit = 12, page?: number) => {
  const requestUrl = new URL(url);

  requestUrl.searchParams.append("completed", "false");

  if (page) {
    requestUrl.searchParams.append("page", String(page));
  }

  // page && requestUrl.searchParams.append("page", String(page));
  limit && requestUrl.searchParams.append("limit", String(limit));

  return requestUrl;
};
