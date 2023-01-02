import '../styles/globals.css'
import Footer from './(home-components)/Footer'
import NavBar from './(home-components)/NavBar'
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
