import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout title = "About">
        <h1> About </h1>
        <Link href = "/"><a> Go Back to Home </a></Link>
        <p> YOO DRAGONITE YA DIGGG </p>
        <img src = "/dragonite.png" alt = "Pokemon" height = "200px" />
    </Layout>
)