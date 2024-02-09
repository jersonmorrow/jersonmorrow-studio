import { defineField, defineType } from "sanity";

const projectSchema = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name",
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: { source: "name" },
        }),
        defineField({
            name: "upload",
            type: "file",
            title: "Upload File",
        }),
        defineField({
            name: "lastName",
            type: "string",
            title: "Last Name",
        }),
        defineField({
            name: "country",
            type: "string",
            title: "Country",
            description: "From which country is this website?",
            options: {
                list: [
                    { title: "Colombia", value: "es-CO" },
                    { title: "México", value: "es-MX" },
                    { title: "España", value: "es-ES" },
                    { title: "Estados Unidos", value: "en-US" },
                ],
                layout: "radio", // <-- defaults to 'dropdown'
            },
        }),
    ],
});

export default projectSchema;
