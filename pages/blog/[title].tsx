import { GetStaticPaths, GetStaticProps } from 'next'
import * as path from 'path'
import * as fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Box } from '@chakra-ui/react'

interface Props {
  source: MDXRemoteSerializeResult;
  data: PostData;
}

interface PostData {
  title: string;
  date: string;
  spoiler: string;
}

const Post = ({ source, data }: Props) => {
  return (
    <>
      <Box as="section" mx="auto" maxW="2xl" py="6" px={{ base: '4', md: '8'}}>
        <MDXRemote {...source} components={data}/>
      </Box>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPosts().map((post) => ({
      params: {
        title: post.data.title
      }
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { title }}) => {
  const { content, data } = getPosts().find(post => post.data.title === title)
  const source = await serialize(content)
  return {
    props: { source, data }
  }
}

const dirPaths = path.join("pages", "blog");
const getPosts = () => {
  return fs
    .readdirSync(dirPaths, { withFileTypes: true })
    .filter((dirEnt) => dirEnt.isDirectory())
    .flatMap((dirEnt) => {
      const dirPath = path.join(dirPaths, dirEnt.name);
      return fs
        .readdirSync(dirPath)
        .map(filename => fs.readFileSync(path.join(dirPath, filename)))
    }).map(f => {
      const { orig, ...post } = matter(f);
      return post;
    })
}