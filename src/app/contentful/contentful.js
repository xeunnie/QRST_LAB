import { createClient } from 'contentful';

export const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  });

export const fetchContentful = async(contentType)=> {
  const res = await client.getEntries({ content_type: contentType });
  return res.items;
}

