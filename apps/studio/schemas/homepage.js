import { FaHome } from "react-icons/fa"

export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: FaHome,
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "name",
      title: "Your Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "info",
      title: "Your short Info",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Your description Description (for the About section)",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Background-Image for the Homepage Header",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
}
