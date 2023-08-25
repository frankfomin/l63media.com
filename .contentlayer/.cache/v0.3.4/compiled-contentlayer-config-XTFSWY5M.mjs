// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "project-data/**/*.mdx",
  contentType: "mdx",
  fields: {
    projectName: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    videoPath: {
      type: "string"
    }
  }
}));
export {
  Doc
};
//# sourceMappingURL=compiled-contentlayer-config-XTFSWY5M.mjs.map
