import { Link, Text } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const NotFound = () => {
    return (       
        <main className={styles.main}>
        <div>
        <Text fontSize='6xl'>404</Text>
        <Text fontSize='3xl'>Page not found</Text>
        <Text fontSize='3xl'>{''}
        <Link color='teal.500' href="/"> GO BACK HOME </Link>
        </Text>
        </div>
                               
        </main>
        
    );
}

export default NotFound;