import { FaSitemap } from 'react-icons/fa'

export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    icon: FaSitemap,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'level',
            title: 'My skill level',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5),
        },
    ],
}
