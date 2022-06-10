import Head from 'next/head'
import Link from 'next/link'

export default function Header() {
	return (
		<>
			<Head>
				<title>Next Blog App</title>
			</Head>
			<header>
				<div className='container'>
					<Link href='/' passHref>
						<h2>Dev Blog</h2>
					</Link>
				</div>
			</header>
		</>
	)
}
