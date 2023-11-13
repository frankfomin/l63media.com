// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "project/**/*.mdx",
  contentType: "mdx",
  fields: {
    projectName: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    vimeoPath: {
      type: "number",
      required: true
    },
    videoPath: {
      type: "string",
      required: true
    },
    path: {
      type: "string",
      required: true
    },
    mobile: {
      type: "boolean",
      required
    },
    style: {
      type: "string",
      required: true
    },
    imagePath: {
      type: "string"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc]
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7CNMVMJU.mjs.map
