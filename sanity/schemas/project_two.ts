import { defineType } from 'sanity'

const projectSchemaTwo = defineType({
  name: 'project-two',
  title: 'Project Two',
  type: 'file',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
  ],
})

export default projectSchemaTwo
