import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html data-theme='pastel'>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<meta name='description' content='La bibliothèque de Henri Potier' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Courgette&family=Poppins&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
