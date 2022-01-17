import Link from 'next/link'
import Image from './Image'

export default function Post({ post, images }) {
	return (
		<div className='card'>
			<Image images={images} id={post.id} />

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
