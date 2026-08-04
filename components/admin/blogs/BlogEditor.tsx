"use client";

import { Editor } from "@tinymce/tinymce-react";

export default function BlogEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      value={value}
      onEditorChange={onChange}
      init={{
        height: 700,

        menubar: true,

        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "table",
          "code",
          "fullscreen",
          "wordcount",
        ],

        toolbar:
          "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image table | code fullscreen",

        block_formats:
          "Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6",
      }}
    />
  );
}