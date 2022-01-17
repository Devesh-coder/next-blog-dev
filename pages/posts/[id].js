import Link from 'next/link'
import MarkdownIt from 'markdown-it'
import Image from '../../components/Image'

export default function PostPage({ post }) {
	// console.log(images)
	const md = new MarkdownIt()
	const htmlContent = md.render(post.attributes.content)

	let imageURL = ''
	if (post.id == 1) {
		imageURL = 'http://localhost:1337/uploads/blog_Pic1_945d4ceb18.jpg'
	} else if (post.id == 2) {
		imageURL = 'http://localhost:1337/uploads/blog_Pic2_30af4e8c5c.jpg'
	} else if (post.id == 3) {
		imageURL = 'http://localhost:1337/uploads/blog_Pic3_da71a9605f.jpg'
	} else if (post.id == 4) {
		imageURL = 'http://localhost:1337/uploads/blog_Pic4_8e021ed367.jpg'
	}
	return (
		<>
			<Link href='/'>
				<a className='btn btn-back'>Go Back</a>
			</Link>
			<div className='card card-page'>
				<h1 className='post-title'>{post.attributes.title}</h1>
				<div className='post-date'>
					Posted on {post.attributes.publishedAt.substring(0, 10)}
				</div>
				<img src={imageURL} alt='' />
				{/* <Image images={images} id={post.id} /> */}
				<div className='post-body'>
					<div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
				</div>
			</div>
		</>
	)
}

//Number of pages to use
export async function getStaticPaths() {
	const res1 = await fetch('http://localhost:1337/api/posts')
	const postData = await res1.json()
	const posts = postData.data

	const paths = posts.map((post) => ({
		params: { id: post.id.toString() },
		// params: { slug: post.id.toString() },
	}))

	return {
		paths,
		fallback: false,
	}
}

//Data for each page
export async function getStaticProps({ params }) {
	const { id } = params

	const res = await fetch(`http://localhost:1337/api/posts/${id}`)
	const data = await res.json()
	const post = data.data

	return {
		props: {
			post,
		},
	}
}
