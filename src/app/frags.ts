export const paths = {
  root: "/hello",
  relative: "hello/:id"
};
export const frags = {
  root: ["/", "hello"],
  hello: (id: number) => ["/hello", id]
};
