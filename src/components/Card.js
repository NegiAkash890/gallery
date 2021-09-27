import React  from 'react'
import { Route, Link} from 'react-router-dom'
import './Card.css'
import EditCollection from './EditCollection'
import { EditIcon } from '@chakra-ui/icons'
import { Box, Heading } from '@chakra-ui/layout'
import { Text, Image } from "@chakra-ui/react"


function Card({name, description, id ,images}) {
    return (
        <Box className='collection_card'>
            <Box borderBottom="1px"  pb="2" borderColor="gray.200" display="flex" justifyContent="space-between" alignItems="center">
                <Heading as="h3" size="md">{name ? name : "Heading"}</Heading>
                <p className='image_count'>{images.length } {images.length > 1 ? "items":"item"}</p>
            </Box>
            <Box mt="5">
                <Heading as="h4" size="sm">Description</Heading>
                <Text fontSize="xs" mt={2} color="gray.600" isTruncated>{description ? description : "Description goes here"}</Text>
                <Box className='collection_card_image'>
                { (images.length === 0 ) ? "No Images to Show" :(
                       images.map((item)=>{
                           return(
                            <Image p="1" boxSize="100px" objectFit="cover" src={item.link} alt={item.alt} key={item.id}/>
                            )
                        }))
                   }
                </Box>
                
                <Link to={`/edit/${id}`}><Box display="flex" alignItems="center"><EditIcon ml={2}/></Box></Link>
                <Route path={`/edit/:id`} component={EditCollection}></Route>
            </Box>
        </Box>
    )
}

export default Card
