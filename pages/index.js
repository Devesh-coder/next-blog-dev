import Head from 'next/head'
import Post from '../components/Post'

export default function Home({ posts, users, images }) {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
			</Head>

			<div className='posts'>
				{posts.map((post) => (
					<Post key={post.id} post={post} users={users} images={images} />
				))}
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const res1 = await fetch('http://localhost:1337/api/posts')
	const res2 = await fetch('http://localhost:1337/api/users')
	const resImg = await fetch('http://localhost:1337/api/upload/files')

	const images = await resImg.json()
	const postData = await res1.json()
	const userData = await res2.json()

	const posts = postData.data
	const users = userData

	return {
		props: {
			posts,
			users,
			images,
		},
	}
}
