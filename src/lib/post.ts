import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

// mdファイルのデータを取り出す
export const getPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名（拡張子なし）
    const id = fileName.replace(/\.md$/, '');

    // mdファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // TODO: return
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult,
    };
  });

  // TODO: return
  return allPostsData;
};
