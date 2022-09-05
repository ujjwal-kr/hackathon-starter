import { createStyles, Text, Title, Button, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Home() {

    let [user, setUser] = useState(null)

    useEffect(() => {
        const userStr = window.localStorage.getItem("user")
        const token = window.localStorage.getItem("token")

        if (userStr && token) {
            setUser(JSON.parse(userStr))
            console.log(user)
        }
    }, [])

    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>Hackathon Starter</Title>
                <Text weight={500} size="lg" mb={5}>
                    <code>Author: <a className={classes.title} href="https://github.com/ujjwal-kr">@ujjwal-kr</a></code>
                </Text>
                <Text size="md" color="dimmed">
                    <code>A full stack JavaScript template [MERN] to quickly get started on a hackathon or some equivalent business you are up to. With features like signin and user registration built in. Read the readme for the list of packages included.</code>
                </Text>
                <br />
                {user ? 
                <div>
                    <p className={classes.title}>Logged in As {user.name}</p>
                    <Button onClick={() => {
                        window.localStorage.removeItem("user")
                        window.localStorage.removeItem("token")
                        setUser(null)
                    }} size='md' variant="gradient"
                         gradient={{ from: 'red', to: 'yellow', deg: 60 }}>
                         Log Out
                     </Button>
                </div>
                 : 
                 <div>
                 <Link to="/register">
                     <Button size='md' variant="gradient"
                         gradient={{ from: 'red', to: 'yellow', deg: 60 }}
                         className={classes.buttons}>
                         Register
                     </Button>
                 </Link>

                 <strong>/</strong>
                 <Link to="/login">
                     <Button size='md' variant="gradient"
                         gradient={{ from: 'red', to: 'yellow', deg: 60 }}
                         className={classes.buttons}>
                         Login
                     </Button>
                 </Link>
             </div>
                
                }
            </div>

            <Image src="https://cdn.discordapp.com/attachments/876794298782347284/1016228928991543316/unknown.png" className={classes.image} />
        </div>
    );
}

const useStyles = createStyles((theme) => ({
    wrapper: {
        margin: '10rem',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem',
        borderRadius: theme.radius.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column-reverse',
            padding: theme.spacing.xl,
        },
    },

    image: {
        maxWidth: '30%'
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: 'monospace',
        lineHeight: 1,
        fontWeight: 'bold',
        textDecoration: 'none',
        marginBottom: theme.spacing.md,
    },

    buttons: {
        margin: '10px',
        fontFamily: 'monospace',
    },

    body: {
        paddingRight: theme.spacing.xl * 4,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingRight: 0,
            marginTop: theme.spacing.xl,
        },
    },


}));