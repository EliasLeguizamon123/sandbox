import { Box, Button, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
  return (
    <Box>
        <Text>Login</Text>
        <Button onClick={() => navigate('/')}>Go Home</Button>
    </Box>
  )
}

export default Login