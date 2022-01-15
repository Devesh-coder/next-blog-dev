import Link from 'next/link'

export default function Post({ post, user, images }) {
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
		<div className='card'>
			<img src={imageURL} alt='' />
			<div className='post-date'>
				Posted on {post.attributes.publishedAt.substring(0, 10)}
			</div>
			<h3 className='clickable'> {post.attributes.title} </h3>
			<p> {post.attributes.description} </p>
			<Link href={`/posts/${post.id}`}>
				<a className='btn'>Read More</a>
			</Link>
		</div>
	)
}
