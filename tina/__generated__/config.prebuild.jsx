// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "master",
  clientId: "",
  token: "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "product",
        label: "Products",
        path: "content/products",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
            isTitle: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "number",
            name: "price",
            label: "Price (EUR)",
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              { value: "kitchens", label: "Kitchens" },
              { value: "dining", label: "Dining" },
              { value: "studies", label: "Studies" },
              { value: "accessories", label: "Accessories" }
            ]
          },
          {
            type: "string",
            name: "collection",
            label: "Collection"
          },
          {
            type: "image",
            name: "image",
            label: "Main Image",
            required: true
          },
          {
            type: "image",
            name: "images",
            label: "Gallery Images",
            list: true
          },
          {
            type: "string",
            name: "materials",
            label: "Materials",
            list: true
          },
          {
            type: "object",
            name: "dimensions",
            label: "Dimensions",
            fields: [
              {
                type: "string",
                name: "width",
                label: "Width"
              },
              {
                type: "string",
                name: "height",
                label: "Height"
              },
              {
                type: "string",
                name: "depth",
                label: "Depth"
              },
              {
                type: "string",
                name: "raw",
                label: 'Raw (e.g. "Sur mesure", "80 cm diameter")'
              }
            ]
          }
        ]
      },
      {
        name: "furniture_collection",
        label: "Collections",
        path: "content/furniture_collections",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
            isTitle: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true
          }
        ]
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
