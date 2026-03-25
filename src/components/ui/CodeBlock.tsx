import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  lang: string;
}

export async function CodeBlock({ code, lang }: CodeBlockProps) {
  const html = await codeToHtml(code, { lang, theme: "vesper" });
  return (
    <div
      className="rounded-lg overflow-hidden text-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
