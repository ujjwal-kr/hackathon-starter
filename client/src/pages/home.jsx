import { createStyles, Text, Title, TextInput, Button, Image } from '@mantine/core';
import image from '../assets/react.svg';

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
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontWeight: 'bold',
    textDecoration: 'none',
    marginBottom: theme.spacing.md,
  },

  buttons: {
    margin: '10px',
  },

}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Hackathon Starter</Title>
        <Text weight={500} size="lg" mb={5}>
          Author: <a className={classes.title} href="https://github.com/ujjwal-kr">@ujjwal-kr</a>
        </Text>
        <Text size="sm" color="dimmed">
        A full stack JavsScript template [MERN] to quickly get started on a hackathon or some equivalent business you are up to. With features like signin and user registration build in. Read the readme for the list of packages included.
        </Text>
<br />
        <div>
          <Button className={classes.buttons}>Register</Button>
          <strong>/</strong>
          <Button className={classes.buttons}>Login</Button>
        </div>
      </div>
      <Image src={image.src} className={classes.image} />
    </div>
  );
}