import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createCollection } from '../redux/actions/action';
import { useHistory } from 'react-router';
import { v4 as uuidv4} from 'uuid'

import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Container, Image, Stack } from "@chakra-ui/react"
import {Alert,AlertIcon } from "@chakra-ui/react"
import './CreateCollection.css'

{/* Genertaing unique Id for collection */}
let id = uuidv4();

function CreateCollection() {
    const history = useHistory() ;
    const dispatch = useDispatch() ;
    const [error, setError] = useState(false) ;
    const [msg,setErrorMsg] = useState('') ;
    const [name,setName] = useState('') ;
    const [description, setDescription] = useState('') ;
    const [images, setImages] = useState([]) ;
    const [link, setLink ] = useState('') ;
    const [alt, setAlt ] = useState('') ;
    
    {/* Adding Image to the Collection */}

    const addImage = (e)=>{
        e.preventDefault();
        let imgId= uuidv4();
        if((link.length <  8) || (alt.length === 0)){
            setErrorMsg("Please Fill Link Image Fields Properly")
            setError(true)
            setTimeout(()=> {setError(false)},3000)
            return ;
        }
        const newArray = [ ...images, {id:imgId, link:link, alt:alt}] ;
        setImages(newArray);
        
    } 
    
     {/* Remove Image to the Collection */}

    const removeImage = (e, id) =>{
           e.preventDefault()
           let newImageCollection = images.filter( img => img.id !== id);
           setImages(newImageCollection);
    }

     {/* Logic for validation and adding Collection to redux */}

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
        dispatch(createCollection(newCollection));
        id= uuidv4();
        history.push('/');
    }
    
     {/* Tracking Changes in the fields */}

    const handleChange = (e, field) =>{
   
        if(field === "name") {
            setName(e.target.value);
        }
        else if( field === "description"){
            setDescription(e.target.value);
        }
        else if( field === "link"){
            setLink(e.target.value)
        }
        else if( field === "alt") { 
            setAlt(e.target.value)
        }
    }

    return (
        <Container maxW="xl" mt="4">
              <Alert status="error" mb={2} hidden={!error}>
                    <AlertIcon />
                    {msg}
              </Alert>
            <form>
                <Stack spacing={4}>
                 <Box display="flex"  alignItems="center"  justifyContent="flex-end" width="100%">
                    <Button type='submit' size="sm" colorScheme="teal" onClick={(e)=>handleClick(e)} disabled={error}>Create Collection</Button>
                </Box>
                <FormControl>
                    <FormLabel>Collection Id</FormLabel>
                    <Input type="text" value={id}  placeholder='Collection Id' disabled/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Collection Name</FormLabel>
                    <Input type="text" onChange={(e)=>handleChange(e,"name")} value={name} placeholder='Enter Collection Name' required/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Collection Description</FormLabel>
                    <Textarea onChange={(e)=>handleChange(e,"description")} defaultValue={description} id='collection_description'  placeholder='Enter Description' isRequired/>
                </FormControl>
                <FormControl>
                    <FormLabel>Add Images</FormLabel>
                    <Input type='url' onChange={(e)=>handleChange(e,"link")} placeholder="Image Link" value={link}/>
                    <Input  mt={2} type='name' onChange={(e)=>handleChange(e,"alt")}  placeholder="Alternate Text" value={alt}/>
                    <Button mt={2} d= 'block' verticalAlign	='right' onClick={addImage} colorScheme="teal" variant="outline">Add Image</Button>
                    <div className='image_preview' mb="4">
                   { 
                       images.map((item)=>{
                           return(
                           <div className='list_item' key={item.id} >
                               <Button backgroundColor="red.400" size="xs" position="absolute" left="90" top="0" onClick={(e)=>removeImage(e, item.id)}>x</Button>
                               <Image boxSize="100px" objectFit="cover" src={item.link} key={item.id} fallbackSrc="https://via.placeholder.com/150" />
                           </div>)
                        } )
                   }
                   </div>
                </FormControl>
                </Stack>
            </form>
          
        </Container >
    )
}

export default CreateCollection
