import { Footer, Header } from '../components'

interface Props {
    children: React.JSX.Element [] | React.JSX.Element;
}

const PageLayout = ( { children }: Props) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default PageLayout