import './globals.css'

export const metadata = {
  title: 'Loving Hands Academy - Excellence in Education | Entebbe, Uganda',
  description: 'Empowering the next generation through holistic education rooted in Christian values, academic excellence, and character development in beautiful Entebbe, Uganda.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}