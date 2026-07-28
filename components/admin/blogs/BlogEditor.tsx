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
          "undo redo | styles | bold italic | alignleft aligncenter alignright | bullist numlist | link image table | code fullscreen",
      }}
    />
  );
}