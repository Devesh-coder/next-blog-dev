import Link from 'next/link'
import MarkdownIt from 'markdown-it'

export default function PostPage({ post }) {
	const md = new MarkdownIt()
	const htmlContent = md.render(post.attributes.content)
	let imageURL = ''
	if (post.id == 1) {
		imageURL = 'http://localhost:1337/uploads/blog_Pic1_7860ab4f84.jpg'
	} else if (post.id == 2) {
		imageURL = 'http://localhost:1337/uploads/blog_Pic2_ac00da3099.jpg'
	} else if (post.id == 3) {
		imageURL = 'http://localhost:1337/uploads/blog_Pic3_b2d1047ddc.jpg'
	} else if (post.id == 4) {
		imageURL = 'http://localhost:1337/uploads/blog_Pic4_3dfb932662.jpg'
	}
	return (
		<>
			<Link href='/'>
				<a className='btn btn-back'>Go Back</a>
			</Link>
			<div className='card card-page'>
				<h1 className='post-title'>{post.attributes.title}</h1>
				{/* <div className='post-date'>Posted on {date}</div> */}
				<img src={imageURL} alt='' />
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
	}))

	return {
		paths,
		fallback: false,
	}
}

//Data for each page
export async function getStaticProps({ params }) {
	// console.log(id)
	// const { slug } = params
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

// export default function PostPage() {
// 	return <div>Post</div>
// }
