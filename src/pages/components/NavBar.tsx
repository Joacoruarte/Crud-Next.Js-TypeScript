import { Button, Container, Menu } from "semantic-ui-react"
import Image from "next/image"
import { useRouter } from "next/router"
export default function NavBar() {
    const router = useRouter()
  return (
    <Menu inverted attached style={{padding:"1.5rem"}}>
        <Container> 
            <Menu.Item onClick={() => router.push("/")}> 
                <Image 
                src="https://react.semantic-ui.com/logo.png"
                width={30}
                height={30}
                alt="logo"
                />
            </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item>
                    <Button onClick={ ()=> router.push("/tasks/new")}>
                        new Task
                    </Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
  )
}
