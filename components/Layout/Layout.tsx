import Footer from './Footer';
import Header from './Header';
import classes from './Layout.module.css'

type Props = { children: React.ReactNode };
const Layout: React.FC<Props> = ({children}) => {
    return (
        <>
        <Header/>
        <main className={classes.main}>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;