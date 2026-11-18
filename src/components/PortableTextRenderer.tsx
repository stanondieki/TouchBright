import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/imageBuilder";

export const portableTextComponents: Partial<PortableTextComponents> = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <img
          src={urlForImage(value.asset._ref).url()}
          alt={value.caption || ""}
          className="rounded-xl my-6 w-full h-auto"
        />
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-heading font-bold text-slate-900 mt-6 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-4 italic text-slate-600 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-slate-700 mb-6 space-y-2">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-accent hover:text-accent-dark underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export function PortableTextRenderer({ content }: { content: any }) {
  return <PortableText value={content} components={portableTextComponents} />;
}
