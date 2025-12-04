import type { Metadata } from 'next';
import { generateStaticParamsFor, importPage } from 'nextra/pages';

import { useMDXComponents as getMDXComponents } from '../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

interface PageProps {
  params: Promise<{ mdxPath?: string[] }>;
  searchParams?: Promise<Record<string, string | string[]>>;
}

// dynamic metadata
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const { metadata } = await importPage(params.mdxPath);

  return {
    ...metadata,
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_APP_URL +
        '/' +
        (params.mdxPath?.join('/') ?? ''),
    },
    appleWebApp: {
      ...(metadata.appleWebApp && typeof metadata.appleWebApp === 'object'
        ? metadata.appleWebApp
        : {}),
      title: metadata.title,
    },
  };
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: PageProps) {
  const params = await props.params;

  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath);

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
