import api from "./api";

const postsUrl = `${process.env.API_BASE_URL}/posts`;

export const postsSlice = api.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation<
      Post,
      Pick<Post, "title" | "content" | "status" | "user">
    >({
      query: (data) => ({
        url: `${postsUrl}/`,
        body: { ...data },
        method: "POST",
      }),
    }),
    retrieveAllPosts: build.query<Post[], null>({
      query: () => ({
        url: `${postsUrl}/`,
        method: "GET",
      }),
    }),
    retrievePost: build.query<Post, Pick<Post, "id">>({
      query: (data) => ({
        url: `${postsUrl}/${data.id}`,
        method: "GET",
      }),
    }),
    updatePost: build.mutation<Post, Post>({
      query: (data) => ({
        url: `${postsUrl}/${data.id}`,
        method: "POST",
        body: { ...data },
      }),
    }),
    partialUpdatePost: build.mutation<
      Post,
      Omit<Post, "url" | "created_at" | "updated_at">
    >({
      query: (data) => ({
        url: `${postsUrl}/${data.id}`,
        method: "POST",
        body: { ...data },
      }),
    }),
    deletePost: build.query<null, Pick<Post, "id">>({
      query: (data) => ({
        url: `${postsUrl}/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

const {
  useCreatePostMutation,
  useDeletePostQuery,
  usePartialUpdatePostMutation,
  useUpdatePostMutation,
  useRetrieveAllPostsQuery,
  useRetrievePostQuery,
} = postsSlice;