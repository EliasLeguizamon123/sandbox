import { Box, Button, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <Box>
        <Text>Home</Text>
        <Button onClick={() => navigate('/login')}>Go Login</Button>
    </Box>
  )
}

export default Home