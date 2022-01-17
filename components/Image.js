export default function Image({ images, id }) {
	const imgArray = [images.map((image) => image)]
	const all_img = imgArray[0]
	const img = all_img[id - 1].url

	const entireURL = `http://localhost:1337${img}`
	console.log(entireURL)

	return <img src={entireURL} alt='' />
}
