import { useEffect, useState } from "react";
import { v4 as uuidv4} from 'uuid'
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { deleteCollection, updateCollection } from "../redux/actions/action";
import { Link } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { Button } from '@chakra-ui/button';
import {Alert,AlertIcon } from "@chakra-ui/react"
import { Box, Container, Image, Text, Stack } from "@chakra-ui/react"




function EditCollection() {

    const {id} = useParams();
    const history = useHistory()
    const [error, setError] = useState(false) ;
    const [msg,setErrorMsg] = useState('') ;
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [link, setLink ] = useState('') ;
    const [alt, setAlt ] = useState('') ;
    const collections  = useSelector( state => state.collections.collections)

    useEffect(()=>{
       
         let item = collections.filter(item => item.id === id);
         setName(item[0]?.name)
         setDescription(item[0]?.description)
         setImages(item[0]?.images)

    },[])

  
    const addImage = (e)=>{
        e.preventDefault();
        if((link.length <  8) || (alt.length === 0)){
            setErrorMsg("Please Fill Link Image Fields Properly")
            setError(true)
            setTimeout(()=> {setError(false)},3000)
            return ;
        }
        let newImgId = uuidv4();
        const newArray = [ ...images, { id:newImgId,link:link, alt:alt}] ;
        setImages(newArray);
        
    }

    const removeImage = (e,id)=>{
        e.preventDefault();
        let newImageCollection = images.filter( img => img.id !== id);
        setImages(newImageCollection);
    }
    
    const removeCollection = (e) =>{
        e.preventDefault();
        dispatch(deleteCollection(id));
        history.push('/')
    }
    const handleClick = (e) =>{

        e.preventDefault();
        if(name.length < 5){
            setErrorMsg("Name should be atleast 5 character long")
            setError(true);
            setTimeout(()=> {setError(false)},3000)
            return ;
           
        }

        else if(description.length < 5){
            setErrorMsg("Longer description atleast 10 characters long")
            setError(true)
            setTimeout(()=> {setError(false)},3000)
            return ;
        }
        
        else if(images.length === 0){
            setErrorMsg("Please provide image data")
            setError(true)
            setTimeout(()=> {setError(false)},3000)
            return ;
        }
        const newCollection = {id, name, description, images};
        dispatch(updateCollection(newCollection));
        history.push('/')
      
    }
    const handleChange = (e, field) =>{
        switch(field){
            case "name" : setName(e.target.value)
            break;
            case "description" : setDescription(e.target.value)
            break;
            case "link" : setLink(e.target.value);
            break;
            case "alt" : setAlt(e.target.value);
            break;
            default :
            break;
        }
    }

   return(
        <Container maxW="xl" mt="10">
            <Alert status="error" mb={2} hidden={!error}>
                    <AlertIcon />
                    {msg}
            </Alert>
           <Box display="flex" justifyContent="space-between">
                <h2>Editing Collection</h2>
                <Box mb="2" display="flex" alignItems="center">
                    <Button mr="2" type='submit' size="xs" onClick={handleClick} disabled={error}>Update</Button>
                    <Link to='/' onClick={removeCollection}><Text fontSize="xs" color="red.400">Delete</Text></Link>
                </Box>
            </Box>
           <hr/>
           <br/>
           <form>
           <Stack spacing={4}>
           <FormControl>
                <FormLabel>Collection Id</FormLabel>
                    <Input type="text" value={id}  placeholder='Collection Id' disabled/>
                </FormControl>
                <FormControl  isRequired>
                    <FormLabel>Collection Name</FormLabel>
                    <Input type="text" onChange={(e)=>handleChange(e,"name")} value={name} placeholder='Enter Collection Name'/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Collection Description</FormLabel>
                    <Textarea onChange={(e)=>handleChange(e,"description")} defaultValue={description} id='collection_description'  placeholder='Enter Description' isRequired/>
                </FormControl>
                <FormControl>
                    <FormLabel>Add Images </FormLabel>
                    <Input type='url' onChange={(e)=>handleChange(e,"link")} placeholder="Image Link" value={link}/>
                    <Input  mt={2} type='name' onChange={(e)=>handleChange(e,"alt")}  placeholder="Alternate Text" value={alt}/>
                    <Button mt={2} w='sm' d= 'block' verticalAlign	='right' onClick={addImage} colorScheme="teal" variant="outline">Add Image</Button>
                    <div className='image_preview'>
                   { 
                       (images.length  !== 0) ?  images.map((item)=>{
                           return(
                           <div className='list_item'  key={item.id}>
                               <Button backgroundColor="red.400" size="xs" position="absolute" left="90" top="1" onClick={(e)=>removeImage(e, item.id)}>x</Button>
                               <Image boxSize="100px" objectFit="cover" src={item.link} key={item.id} fallbackSrc="https://via.placeholder.com/150" />
                           </div>)
                        } ) : "No Images to show"
                   }
                   </div>
                </FormControl>
                </Stack>
            </form>
        </Container>
   )
  
}

export default EditCollection
