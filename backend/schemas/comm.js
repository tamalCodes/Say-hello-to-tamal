export default {
  name: "comms",
  title: "Comms",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "twitterlink",
      title: "Twitter Link",
      type: "string",
    },
  ],
};
