import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Tooltip,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { MdAdd, MdClear, MdEdit } from 'react-icons/md';
import MyDialog from '../MyDialog';

function ItemsList(props: any) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={props.data.name} subheader="September 14, 2016" />
        <CardMedia
          className={classes.media}
          image={props.data.image}
          title={props.data.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="duplicar">
            <IconButton onClick={() => props.duplicate(props.data)}>
              <MdAdd />
            </IconButton>
          </Tooltip>
          <Tooltip title="excluir">
            <IconButton onClick={() => props.delete(props.data)}>
              <MdClear />
            </IconButton>
          </Tooltip>
          <Tooltip title="editar">
            <IconButton onClick={() => setOpenDialog(true)}>
              <MdEdit />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      <MyDialog
        open={openDialog}
        data={props.data}
        edit={props.edit}
        handleClose={() => setOpenDialog(false)}
      />
    </>
  );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 345,
      height: 450,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }),
);

export default ItemsList;
