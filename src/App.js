import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Box } from "@chakra-ui/react"
import { List, ListItem } from "@chakra-ui/react"
import CreateCollection from './components/CreateCollection';
import EditCollection from './components/EditCollection';
function App() {


  return (
    <ChakraProvider>
      <Router>
      <div className="App">

            {/* Navigation Bar*/}
            <Box bg='blue.500'>
                <List display="flex" p="4">
                    <ListItem color="white" ml="3">
                        <Link to='/'>Home</Link>
                        </ListItem>  
                    <ListItem color="white" ml="3">
                        <Link to='/create_new'>Create</Link>
                    </ListItem>
                </List>
            </Box>

            {/* Home to render collection*/}
            <Switch>
                <Route exact path = '/create_new'>
                  <CreateCollection/>
                </Route>
                <Route exact path = '/' >
                   <Home/>
                </Route>
                <Route exact path = '/edit/:id'>
                  <EditCollection/>
                </Route>
            </Switch>
          

      </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
