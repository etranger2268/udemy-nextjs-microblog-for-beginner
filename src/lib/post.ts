import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export type PostMeta = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
};

// TODO: error handling
// mdファイルのデータを取り出す
export const getPostsData = (): PostMeta[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名（拡張子なし）
    const id = fileName.replace(/\.md$/, '');

    // mdファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    // TODO: return
    const matterResult = matter(fileContent);
    const { title, date, thumbnail } = matterResult.data;
    return {
      id,
      title,
      date,
      thumbnail,
    };
  });

  return allPostsData;
};

export type PostContent = {
  title: string;
  date: string;
  blogContentHTML: string;
};

// TODO: error handling
export const getPostData = async (id: string): Promise<PostContent> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContent);
  const blogContent = await remark().use(remarkHtml).process(matterResult.content);
  const blogContentHTML = String(blogContent);
  const { title, date } = matterResult.data;
  return { title, date, blogContentHTML };
};

// TODO: error handling
export const getPostsID = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({ id: fileName.replace(/\.md$/, '') }));
};
