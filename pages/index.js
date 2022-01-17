import Head from 'next/head'
import Post from '../components/Post'
import PostPage from './posts/[id]'

export default function Home({ posts, images }) {
	// images.map((image) => <Post key={image.id} image={image} />)

	return (
		<div>
			<Head>
				<title>Create Next App</title>
			</Head>

			<div className='posts'>
				{posts.map((post) => (
					<Post key={post.id} post={post} images={images} />
				))}
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const res1 = await fetch('http://localhost:1337/api/posts')
	const resImg = await fetch('http://localhost:1337/api/upload/files')

	const images = await resImg.json()
	const postData = await res1.json()

	const posts = postData.data

	return {
		props: {
			posts,
			images,
		},
	}
}
