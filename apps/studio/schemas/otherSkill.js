import { FaSitemap } from "react-icons/fa"

export default {
  name: "otherSkill",
  title: "Other Skill",
  type: "document",
  icon: FaSitemap,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "index",
      title: "index",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(100),
    },
  ],
  orderings: [
    {
      title: "By Index",
      name: "byIndex",
      by: [{ field: "index", direction: "asc" }],
    },
  ],
}
