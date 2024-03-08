
import Card from '../components/Card';
import data from '../data.json'

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
            {
                data.map((book) => {
                    return (
                        <Card key={book.name} name={book.name} description={book.Description} />
                    )
                })
            }
        </div>
    )
}

export default Home

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maxime hic. Obcaecati eligendi vitae voluptatem possimus dicta illum necessitatibus nesciunt, soluta est. Distinctio alias cupiditate, sint sit ab odit error.